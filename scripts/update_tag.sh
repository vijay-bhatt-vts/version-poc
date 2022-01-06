#!/usr/bin/env bash

set -e

<<<<<<< HEAD
echo $GITHUB_REF
branch=${GITHUB_REF##*/}

echo $branch

project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))
echo $project_root

sed -i "s/<<TAG_NAME>>/${branch}/g" $project_root/version-poc/package.json

cat $project_root/version-poc/package.json
=======
echo $1
>>>>>>> da12acb (feat(scripts): scripts)
