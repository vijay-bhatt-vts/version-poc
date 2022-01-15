#!/usr/bin/env bash

arr=$1

arraylength=${#arr[@]}

for (( i=0; i<${arraylength}; i++ ));
do
  jq -r '.${arr[$i]} | keys[] as $k | "\($k), \(.[$k])"'
done

for i in "${arr[@]}"
do
   jq -r '.myhosts | keys[] as $k | "\($k), \(.[$k] | .ip)"'
   # or do whatever with individual element of the array
done

 



