#!/bin/bash

MEDIA_SOURCE_FILE=${MEDIA_SOURCE_FILE:-"./press_archive.csv"}
MEDIA_OUTPUT_FILE=${MEDIA_OUTPUT_FILE:-"./../public/press/media.json"}
echo $(pwd)
mkdir -p public/press

cd tools
python3 -m venv .env
source .env/bin/activate

pip3 install -r ./requirements.media.txt

python  press_archive_data.py -i $MEDIA_SOURCE_FILE -o $MEDIA_OUTPUT_FILE

deactivate
rm -rf .env
