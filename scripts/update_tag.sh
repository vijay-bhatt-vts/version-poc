#!/usr/bin/env bash

set -e

echo $GITHUB_REF
branch=${GITHUB_REF##*/}

echo $branch

project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))
echo $project_root

ls $project_root/version-poc

# data_dir="$project_root/examples/data"
# echo "DATA: $data_dir"

 cat $project_root/version-poc/package.json

cat $project_root/version-poc/package.json | jq \
 '.publishConfig.tag |= $branch' > "$tmp" && mv "$tmp" $project_root/version-poc/package.json

cat $project_root/version-poc/package.json