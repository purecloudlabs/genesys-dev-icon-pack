# Genesys Dev Icon Pack

This project amalgamates public-facing Genesys brand icons, Genesys product icons, and general application iconography into a packaged icon library.

Documentation: https://purecloudlabs.github.io/genesys-dev-icon-pack/

## Quick Start

### Install from NPM

```
npm i genesys-dev-icons
```

### Use an Icon in React

```js
import React from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';

export default function MyComponent() {
  return (
    <div>
      <GenesysDevIcon icon={GenesysDevIcons.AppPlusSolid} />
    </div>
  );
}
```

### Use an Icon in HTML

```html
<i class="icon app-plus-solid"></i>
```
