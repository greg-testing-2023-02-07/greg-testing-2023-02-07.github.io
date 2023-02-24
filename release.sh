#!/usr/bin/env sh

set -ex

npm run export
mkdir -p docs
touch docs/index.html
rm docs/index.html
cp -r out/* docs/
git add -A
git commit -m "update"
git push origin main
