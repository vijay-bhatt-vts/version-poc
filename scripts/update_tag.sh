#!/usr/bin/env bash

set -e

echo $GITHUB_REF
splitRef=$(echo $IN | tr "/" "\n")
branch = ${splitRef[-1]}

echo $branch

cat ../package.json | jq \
 '.publishConfig.tag |= $branch' > "$tmp" && mv "$tmp" ../package.json

 cat ../package.json