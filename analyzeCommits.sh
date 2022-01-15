#!/usr/bin/env bash

arg1="$1"

for i in "${arg1[@]}"
 do
  jq -r '$i | to_entries[] | "\(.key), \(.value)"'
 done

 

# npx i -g conventional-commits-parser



