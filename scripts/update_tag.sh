#!/usr/bin/env bash

set -e

echo $GITHUB_REF
splitRef=$(echo $GITHUB_REF | tr "/" "\n")
echo $splitRef
branch=${splitRef[${#splitRef[@]} - 1]}

echo $branch

cat ../package.json | jq \
 '.publishConfig.tag |= $branch' > "$tmp" && mv "$tmp" ../package.json

 cat ../package.json