#!/usr/bin/env bash

set -e

branch=$(git rev-parse --abbrev-ref HEAD)
echo $branch
git fetch --unshallow --tags
# if [ -z "$LATEST_VERSION" ]
# then
#       echo "There is no major/minor/patch commit. Your changes won't be published. Kindly check your commits."
#       exit 1
# else
#       echo "latest version $LATEST_VERSION"
lasttag=$(git for-each-ref --sort=creatordate --format '%(refname) %(creatordate)' refs/tags| grep $branch | tail -1 | cut -d " " -f 1 | cut -d "/" -f 3)
echo $lasttag

# git tag -d $lasttag
# git push --delete origin $lasttag  
# git tag $lasttag
# git push origin $lasttag

# git notes --ref semantic-release add -f -m '{"channels":${branch}}' $lasttag
# git push --force origin refs/notes/semantic-release