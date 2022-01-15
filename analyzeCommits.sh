#!/usr/bin/env bash

arg1="$1"

echo "$arg1" | jq -c '.[]' | while read i; do
    echo $i
done

 

# npx i -g conventional-commits-parser



