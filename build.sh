#!/bin/bash

OUTPUT_DIR="./dist"

rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR

fantasticon --version

fantasticon \
  --name "genesys-dev-icons" \
	--output dist \
	--normalize true \
	icons
