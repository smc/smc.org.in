#!/bin/bash

FONTS_URL=${FONTS_URL:-"smc/fonts"}
# Convert slash to %2F
FONTS_SLUG=${FONTS_URL/\//%2F}

mkdir -p public/downloads/fonts && cd $_
python3 -m venv .env
source .env/bin/activate
pip3 install -r ./../../../tools/requirements.txt
fonts=(gayathri anjalioldlipi rachana meera manjari raghumalayalamsans dyuthi keraleeyam uroob chilanka karumbi suruma)
for font in "${fonts[@]}"; do
        version=$(curl -sSL "https://gitlab.com/api/v4/projects/${FONTS_SLUG}%2F${font}/repository/tags??order_by=updated" | jq '.[].name' | head -1 | tr -d '"')

        echo "$font : $version"
        if [ -z "${version}" ]; then
                echo "No version found. Skipping."
                continue
        fi

        mkdir -p "$font"
        cd "$font"

        wget -q "https://gitlab.com/${FONTS_URL}/${font}/-/jobs/artifacts/${version}/download?job=build-tag" -O artifacts.zip
        unzip -q artifacts.zip
        mv build/* .

        rm -rf build artifacts.zip

        if $(ls *-Regular.ttf 1> /dev/null 2>&1); then
          python3 ../../../../tools/fontdata.py *-Regular.ttf
        else
          python3 ../../../../tools/fontdata.py *.ttf
        fi
        zip -qr "${font}.zip" . -i "*.ttf" -i "*.otf" -i "*.woff" -i "*.woff2" -j
        cd ../
        sed -i "s/@VERSION@/$version/g" ../../fonts/${font}.css
done

zip -qr fonts-smc.zip . -i "*.ttf" -i "*.otf" -i "*.woff" -i "*.woff2" -j
deactivate
rm -rf .env
