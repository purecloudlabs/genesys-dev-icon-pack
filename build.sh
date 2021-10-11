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

# Copy to app
rm -rf $APP_RESOURCE_DIR
cp -r $OUTPUT_DIR $APP_RESOURCE_DIR
rm "$APP_RESOURCE_DIR/genesys-dev-icons.html"
