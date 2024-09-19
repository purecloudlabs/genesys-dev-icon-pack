import React, { useEffect, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons } from 'genesys-dev-icons';
import { DxToggle } from 'genesys-react-components';

import IconGallery from './components/icongallery/IconGallery';
import { default as packageJson } from '../package.json';

import './App.scss';

function App() {
	const [useDarkTheme, setUseDarkTheme] = useState(localStorage.getItem('dark-theme') === 'true');

	useEffect(() => {
		localStorage.setItem('dark-theme', useDarkTheme ? 'true' : 'false');
	}, [useDarkTheme]);

	let iconVersion = (packageJson as any)?.dependencies['genesys-dev-icons'] || '';
	if (iconVersion.startsWith('^')) iconVersion = iconVersion.substr(1);
	if (iconVersion !== '') iconVersion = `v${iconVersion}`;
	else iconVersion = 'local build';

	return (
		<div className={`app ${useDarkTheme ? 'app-dark' : 'app-light'}`}>
			<div className="app-padding">
				<div className="app-content">
					<h1>Genesys Dev Icon Pack</h1>
					<DxToggle
						label="Dark Mode"
						value={useDarkTheme}
						trueIcon={GenesysDevIcons.AppMoon}
						falseIcon={GenesysDevIcons.AppSun}
						onChange={(v) => {
							if (v !== undefined && v !== useDarkTheme) {
								setUseDarkTheme(v === true);
							}
						}}
					/>
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
		</div>
	);
}

export default App;
