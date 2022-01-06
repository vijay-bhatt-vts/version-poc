#!/usr/bin/env bash

set -e

echo $GITHUB_REF
branch=${GITHUB_REF##*/}

echo $branch

project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))

cat $project_root/version-poc/package.json | jq \
 '.publishConfig.tag |= $branch' > "$tmp" && mv "$tmp" ../package.json

 cat $project_root/package.json