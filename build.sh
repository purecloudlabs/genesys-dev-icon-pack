#!/bin/bash

# ANSI colors
Black='\033[0;30m'
Red='\033[0;31m'
Green='\033[0;32m'
Orange='\033[0;33m'
Blue='\033[0;34m'
Purple='\033[0;35m'
Cyan='\033[0;36m'
Light_Gray='\033[0;37m'
Dark_Gray='\033[1;30m'
Light_Red='\033[1;31m'
Light_Green='\033[1;32m'
Yellow='\033[1;33m'
Light_Blue='\033[1;34m'
Light_Purple='\033[1;35m'
Light_Cyan='\033[1;36m'
White='\033[1;37m'
CLEAR='\033[0m'

OUTPUT_DIR="./dist"
PACKAGE_DIR="./package"
PACKAGE_RESOURCE_DIR="./package/src/resources"
LINK_PACKAGE=$1


# Clean output dir
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

# Build font
echo -e "\n${Cyan}Building font...${CLEAR}"
fansticonVersion=$(fantasticon --version)
echo "Fansticon v${fansticonVersion}"
fantasticon \
  --name "genesys-dev-icons" \
	--output dist \
	--normalize true \
	icons

# Copy to package source
rm -rf $PACKAGE_RESOURCE_DIR
cp -r $OUTPUT_DIR $PACKAGE_RESOURCE_DIR

# Remove build artifacts we don't need in the React app
rm "$PACKAGE_RESOURCE_DIR/genesys-dev-icons.html"
rm "$PACKAGE_RESOURCE_DIR/genesys-dev-icons.json"

# Build component package
echo -e "\n${Cyan}Building component package...${CLEAR}"
cd $PACKAGE_DIR
npm run buildpackage

# Link package locally
if [[ $LINK_PACKAGE = "true" ]]
then
	echo -e "\n${Cyan}Linking package locally...${CLEAR}"
	npm link
fi

echo -e "\n${Green}Build successful.${CLEAR} ${Yellow}Update the version in package/package.json${CLEAR} and run ${Blue}npm publish${CLEAR} to publish this package.\n"
