#!/usr/bin/env sh

set -ex

npm run build
rm docs/index.html
cp -r build/* docs/
git add -A
git add docs/.nojekyll
git commit -m "update"
git push origin main
popd
