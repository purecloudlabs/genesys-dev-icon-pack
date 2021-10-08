# genesys-dev-icon-pack

This project amalgamates public-facing Genesys brand icons, Genesys product icons, and general application iconography into a packaged icon library.

Documentation: https://purecloudlabs.github.io/genesys-dev-icon-pack/

## Usage

TODO

## Building Locally

### Generate Icon Pack

The first step is to generate the icon pack from the source SVG images found in the `icons` folder. This process uses [fantasticon](https://github.com/tancredi/fantasticon) to transform the SVG files into a font. Do this by running:

```sh
./build.sh
```

The resulting icon pack files will be located in the `dist` folder.

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
npm run deploy
```
