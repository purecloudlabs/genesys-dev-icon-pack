![npm](https://img.shields.io/npm/v/genesys-dev-icons)

![npm (tag)](https://img.shields.io/npm/v/genesys-dev-icons/preview)

# genesys-dev-icon-pack

This project amalgamates public-facing Genesys brand icons, Genesys product icons, and general application iconography into a packaged icon library.

## Usage

See `package/README.md` and https://purecloudlabs.github.io/genesys-dev-icon-pack/.

## Building Locally

### Generate Icon Pack and Component Package

Running the build script first generates the icon pack from the source SVG images found in the `icons` folder. This process uses [fantasticon](https://github.com/tancredi/fantasticon) to transform the SVG files into a font. Next, the new resources are copied into the packaged component's resources and the package is rebuilt.

Install dependencies and run the build:

```sh
cd package
npm ci
npm run build
```

The resulting icon pack files will be located in the `dist` folder. The resulting package source that gets published to npm will be located in the `package/lib` folder.

### Deploy Component Package to NPM

1. Ensure the version number has been incremented appropriately in `package/package.json` in the format `x.y.x` using semantic versioning rules
2. Run the `devengage-publish-npm-package` Jenkins job for this package
   1. Branch builds will have the branch name and build number appended to the package version

### Run Local Demo

The following commands will run the React.js demo application locally and can be accessed at http://localhost:3000/.

```sh
cd app
npm run install
npm run start
```

### Build and Deploy Demo to GitHub Pages

Mainline builds of the `devengage-publish-npm-package` Jenkins job publish the doc site.

# Icon Design Tips

- Vector editor: https://www.vectornator.io/
- Canvas 36x36 px
- Draw lines using a 1.6 em stroke and no fill, convert to outline after drawing
  - Do not use _any_ strokes in the final exported artwork - fill only!
- Group all elements in one group before exporting (often solves black background in compiled icon)

## Troubleshooting

### Why does the icon have a black background or seem inverted?

Try grouping or combining all paths in the document. Sometimes the icon conversion process has trouble identifying boundaries and results in painting unexpected portions or the entire icon the fill color.

If that doesn't fix it, try manually editing the SVG export and remove this element: `<clipPath id="ArtboardFrame"> ... </clipPath>`.

# Imported icons

The owners of trademarks and registered logos retain ownership of their respective works.

## Font Awesome

Font Awesome Icons used in this library are attributed to Font Awesome and are licensed under the free license found at https://fontawesome.com/license/free.

## GitHub

GitHub icons used in this library are attributed to GitHub and are used per the guidelines found at https://github.com/logos.

## NPM

NPM icons used in this library are attributed to NPM and are used per the guidelines found at https://github.com/npm/logos.
