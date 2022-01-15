#!/usr/bin/env bash

arg1="$1"

jq -c '.[]' $arg1 | while read i; do
    echo $i
done

 

# npx i -g conventional-commits-parser



