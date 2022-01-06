#!/usr/bin/env bash

set -e

echo $GITHUB_REF
echo ${GITHUB_REF##*/}
splitRef=$(echo $GITHUB_REF | tr "/" "\n")
echo $splitRef
branch=${splitRef[${#splitRef[@]} - 1]}

echo $branch

project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))
echo $project_root

# data_dir="$project_root/examples/data"
# echo "DATA: $data_dir"

# cat ../package.json | jq \
#  '.publishConfig.tag |= $branch' > "$tmp" && mv "$tmp" ../package.json

#  cat ../package.json