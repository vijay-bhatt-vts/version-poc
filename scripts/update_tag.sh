#!/usr/bin/env bash

set -e

echo $GITHUB_REF
branch=${GITHUB_REF##*/}

echo $branch

project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))
echo $project_root

sed -i "s/<<TAG_NAME>>/${branch}/g" $project_root/version-poc/package.json

cat $project_root/version-poc/package.json

echo $GITHUB_REF

splitRef=$(echo $IN | tr "/" "\n")
branch = ${splitRef[-1]}

echo $branch

cat ../package.json | jq \
 '.publishConfig.tag |= $branch' > "$tmp" && mv "$tmp" ../package.json

 cat ../package.json
