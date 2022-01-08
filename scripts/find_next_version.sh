
LATEST_VERSION=$(cat .semver-output | cut -d " " -f 8)
echo "latest version $LATEST_VERSION"

if [ -z "$LATEST_VERSION" ]
then
      echo "There is no major/minor/patch commit. Your changes won't be published. Kindly check your commits."
      exit 1
else
      echo "latest version $LATEST_VERSION"
fi