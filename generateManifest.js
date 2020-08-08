const path = require("path");
const { readFile, writeFile } = require("fs").promises;
const fs = require("fs");

const fm = require("front-matter");
let manifest = [];

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

async function generateManifest(dir) {
  const files = getAllFiles(dir);
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    const data = await readFile(`${file}`, "utf8");
    const fmd = fm(data);
    if (!fmd || !fmd.attributes.title) continue;
    manifest.push({
      url: fmd.attributes.url,
      file: file.replace("public/", ""),
      date: fmd.attributes.date,
      author: fmd.attributes.author,
      title: fmd.attributes.title,
      description: fmd.attributes.description,
    });
  }
  writeFile(
    "src/manifest.json",
    JSON.stringify(manifest, "", 4),
    "utf8",
    () => {
      console.log("done");
    }
  );
}

generateManifest("public/articles");
