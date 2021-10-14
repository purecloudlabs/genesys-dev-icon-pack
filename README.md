# genesys-dev-icon-pack

This project amalgamates public-facing Genesys brand icons, Genesys product icons, and general application iconography into a packaged icon library.

## Usage

See `package/README.md` and https://purecloudlabs.github.io/genesys-dev-icon-pack/.

## Building Locally

### Generate Icon Pack and Component Package

Running the build script first generates the icon pack from the source SVG images found in the `icons` folder. This process uses [fantasticon](https://github.com/tancredi/fantasticon) to transform the SVG files into a font. Next, the new resources are copied into the packaged component's resources and the package is rebuilt.

Run the build script:

```sh
./build.sh
```

The resulting icon pack files will be located in the `dist` folder. The resulting package source that gets published to npm will be located in the `package/lib` folder.

### Deploy Component Package to NPM

After building, increment the version number if `package/package.json` and `cd package && npm publish` to publish the package to NPM. The commit that gets published should be tagged as `vX.Y.Z`.

### Run Local Demo

The following commands will run the React.js demo application locally and can be accessed at http://localhost:3000/.

```sh
cd app
yarn install
yarn start
```

### Build and Deploy Demo to GitHub Pages

The demo app is published to github pages at https://purecloudlabs.github.io/genesys-dev-icon-pack/. The build and publish process for this uses the `gh-pages` package as outlined in [Deployment | GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages). This process requires your shell environment to be authorized for git to push to the `gh-pages` branch.

Run the following command to invoke the build and publish process:

```sh
cd app
npm run deploy
```
