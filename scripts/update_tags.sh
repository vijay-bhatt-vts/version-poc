#!/usr/bin/env bash

set -e

#echo $GITHUB_REF
#branch=${GITHUB_REF##*/}
#branch="staging1"
branch=$(git rev-parse --abbrev-ref HEAD)

git tag

echo $branch

lasttag=$(git tag | grep $branch | tail -1)


echo $lasttag

# git tag -d $lasttag
# git push --delete origin $lasttag  
# git tag $lasttag
# git push origin $lasttag

# git notes --ref semantic-release add -f -m '{"channels":${branch}}' $lasttag
# git push --force origin refs/notes/semantic-release