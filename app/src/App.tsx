import React from 'react';
import './App.scss';
import './typography.scss';
import IconGallery from './components/icongallery/IconGallery';
import { dependencies } from '../package.json';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';

function App() {
	let iconVersion = (dependencies as any)['genesys-dev-icons'] || '';
	if (iconVersion.startsWith('^')) iconVersion = iconVersion.substr(1);
	if (iconVersion !== '') iconVersion = `v${iconVersion}`;
	else iconVersion = 'local build';

	return (
		<div className="app">
			<div className="app-content">
				<h1>Genesys Dev Icon Pack</h1>
				<IconGallery />
				<div className="icon-version">
					<em>genesys-dev-icons</em>
					<em>{iconVersion}</em>
					<div className="sources">
						<a href="https://github.com/purecloudlabs/genesys-dev-icon-pack">
							<GenesysDevIcon icon={GenesysDevIcons.BrandGithub} />
						</a>
						<a href="https://www.npmjs.com/package/genesys-dev-icons">
							<GenesysDevIcon icon={GenesysDevIcons.BrandNpm} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
