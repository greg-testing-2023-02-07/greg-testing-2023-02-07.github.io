#!/usr/bin/env sh

set -ex

npm run export
rm docs/index.html
cp -r out/* docs/
git add -A
git commit -m "update"
git push origin main
