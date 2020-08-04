#!/usr/bin/python3

from dateutil import parser
from datetime import datetime
import requests, json, csv, os, sys, getopt

class Archive:
    def __init__(self):
        super().__init__()
        self.__search_url = "https://archive.org/wayback/available?url="
        self.__save_url = "https://pragma.archivelab.org"
        self.__default_result_limit = 1
        self.__headers = {'Content-Type': 'application/json'}

    def __url_from_resp(self, resp):
        if resp.status_code != 200:
            return None
        try:
            return resp.json().get("archived_snapshots").get("closest").get("url").strip()
        except AttributeError:
            return None

    def get_archive(self, url, from_date):
        print(url)
        stamp = datetime.strptime(str(from_date).strip(), "%d/%m/%Y")
        try:
            resp = requests.get(self.__search_url+url+"&limit="+str(self.__default_result_limit), headers=self.__headers)
        except requests.ConnectionError:
            return None
        
        return None if resp is None else self.__url_from_resp(resp)

    def create_snapshot(self, url):
        headers = {"Content-Type": "application/json"}
        payload = {"url": url}
        try:
            resp = requests.post(self.__save_url,data=payload,headers=headers)
        except requests.ConnectionError:
            return None
        
        return None if resp is None else self.__url_from_resp(resp)

        
class JSONFile:
    def __init__(self):
        self.__data = list()

    def add_record(self, url, record):
        self.__data.append(record)

    def write_to_file(self, file):
        json.dump(self.__data, file, indent = 4, sort_keys=True, ensure_ascii=False)

class ReadCSV:
    def __init__(self, file):
        super().__init__()
        self.__file = file
        self.__data = dict()
    
        reader = csv.reader(self.__file, delimiter=",")
        
        next(reader)
        for row in reader:
            self.__data[row[1]] = dict(title = row[0], url = row[1], language = row[2], featured = row[3], publishing_date = row[4])

    def get_data(self):
        return self.__data

if __name__ == "__main__":
    try:
        opts, args = getopt.getopt(sys.argv[1:],"hi:o:",["input","output"])    
    except getopt.GetoptError:
        print('press_archive_data.py -i <inputfile> -o <outputfile>')
        sys.exit(2)
    input, output = '', ''
    
    for opt, arg in opts:
      if opt == '-h':
            print('press_archive_data.py -i <inputfile> -o <outputfile>')
            sys.exit()
      elif opt in ("-i", "--input"):
         input = arg.strip()
      elif opt in ("-o", "--output"):
         output = arg.strip()
    try:
        csv_path = os.path.abspath(input)
        csv_file = open(csv_path, encoding='utf-8')
        json_path = os.path.abspath(output)
        json_file = open(json_path, "w+", encoding='utf-8')
    except FileNotFoundError as e:
        print("please check file path. error dumb:"+str(e))
        sys.exit(1)
    except Exception as e:
        sys.exit(1)
    c = ReadCSV(csv_file)
    j = JSONFile()
    a = Archive()

    for k,v in c.get_data().items():
        # Convert featured to boolean.
        v["featured"] = True if v["featured"].strip() in ['true', 't', '1', 'y', 'yes', 'enabled', 'enable', 'on'] else False
        archive_url = a.get_archive(k, v['publishing_date'])
        if archive_url is not None:
            v["archive_url"] = archive_url
        else:
            new_snap = a.create_snapshot(k)
            v["archive_url"] = new_snap if new_snap is  not None else ""
        j.add_record(k, v)
    try:
        j.write_to_file(json_file)
    except Exception as e:
        print("something went wrong: "+str(e))
        sys.exit(1)
    finally:
        json_file.close()
        csv_file.close()

    print("successfully completed")
