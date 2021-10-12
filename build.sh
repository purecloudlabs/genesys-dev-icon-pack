#!/bin/bash

OUTPUT_DIR="./dist"
APP_RESOURCE_DIR="./app/src/lib/genesysdevicon/resources"

# Clean output dir
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

# Build font
fantasticon --version
fantasticon \
  --name "genesys-dev-icons" \
	--output dist \
	--normalize true \
	icons

# Copy to React app source
rm -rf $APP_RESOURCE_DIR
cp -r $OUTPUT_DIR $APP_RESOURCE_DIR

# Remove build artifacts we don't need in the React app
rm "$APP_RESOURCE_DIR/genesys-dev-icons.html"
rm "$APP_RESOURCE_DIR/genesys-dev-icons.json"

# TODO: Build component package

# TODO: Publish to npm
