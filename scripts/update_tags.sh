#!/usr/bin/env bash

set -e

branch=$(git rev-parse --abbrev-ref HEAD)

echo $branch

lasttag=$(git for-each-ref --sort=creatordate --format '%(refname) %(creatordate)' refs/tags | grep $branch | tail -1 | cut -d " " -f 1 | cut -d "/" -f 3)

echo $lasttag

# git tag -d $lasttag
# git push --delete origin $lasttag  
# git tag $lasttag
# git push origin $lasttag

# git notes --ref semantic-release add -f -m '{"channels":${branch}}' $lasttag
# git push --force origin refs/notes/semantic-release