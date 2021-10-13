#!/bin/bash

OUTPUT_DIR="./dist"
PACKAGE_DIR="./package"
PACKAGE_RESOURCE_DIR="./package/src/resources"

# Clean output dir
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

# Build font
echo "Building font..."
fantasticon --version
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

# TODO: Build component package
echo "Building component package..."
cd $PACKAGE_DIR
npm run build
