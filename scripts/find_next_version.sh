npx semantic-release --ci false --dryRun | grep -i "Published release" > .semver-output

export LATEST_VERSION=$([[ $(cat .semver-output) =~ .*([[:digit:]]+\.[[:digit:]]+\.[[:digit:]]+) ]] && echo ${BASH_REMATCH[1]})
echo "latest version $LATEST_VERSION"