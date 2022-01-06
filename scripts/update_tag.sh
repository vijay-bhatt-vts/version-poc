#!/usr/bin/env bash

set -e

echo $GITHUB_REF
branch=${GITHUB_REF##*/}

echo $branch

project_root=$(dirname $(dirname $(dirname $(realpath $0 ))))
echo $project_root

var data = require($project_root/version-poc/package.json);

data.publishConfig.tag = $branch;

console.log(JSON.stringify(data));

# cat $project_root/version-poc/package.json | jq \
#   --arg tagname $branch \
#  '.publishConfig.tag |= $tagname' > $project_root/version-poc/package.json


cat $project_root/version-poc/package.json