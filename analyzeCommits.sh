#!/usr/bin/env bash

arr=$1

arraylength=${#arr[@]}

for (( i=0; i<${arraylength}; i++ ));
do
  jq -r '.arr[0] | keys[] as $k | "\($k), \(.[$k])"'
done


 



