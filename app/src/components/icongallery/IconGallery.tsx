import React from 'react';
import GenesysDevIcon from '../../lib/genesysdevicon/GenesysDevIcon';
import { GenesysDevIcons, GenesysDevIconsKey } from '../../lib/genesysdevicon/resources/genesys-dev-icons';
import './IconGallery.scss';

export default function IconGallery() {
	const iconSets = [];
	iconSets.push({
		name: 'Application Icons',
		// iconNames: Object.values(GenesysDevIcons).filter((key) => key.startsWith('app')) as GenesysDevIcons[],
		iconNames: Object.keys(GenesysDevIcons).filter((key) => key.startsWith('App')) as GenesysDevIconsKey[],
	});
	iconSets.push({
		name: 'Destination Icons',
		iconNames: Object.keys(GenesysDevIcons).filter((key) => key.startsWith('Dest')) as GenesysDevIconsKey[],
	});
	iconSets.push({
		name: 'Information Architecture Icons',
		iconNames: Object.keys(GenesysDevIcons).filter((key) => key.startsWith('Ia')) as GenesysDevIconsKey[],
	});

	return (
		<div className="icon-gallery">
			{iconSets.map((iconSet) => (
				<React.Fragment key={iconSet.name}>
					<h2>{iconSet.name}</h2>
					<div className="icon-set">
						{iconSet.iconNames.map((iconName) => (
							<div key={iconName} className="icon-container">
								<GenesysDevIcon icon={GenesysDevIcons[iconName]} />
								<span>{GenesysDevIcons[iconName]}</span>
								<button
									type="button"
									className="button button-primary"
									onClick={() => navigator.clipboard.writeText(`<GenesysDevIcon icon={GenesysDevIcons.${iconName}} />`)}
								>
									<GenesysDevIcon icon={GenesysDevIcons.AppCopy} /> Copy React
								</button>
								<button
									type="button"
									className="button button-primary"
									onClick={() => navigator.clipboard.writeText(`<i class="icon ${GenesysDevIcons[iconName]}" />`)}
								>
									<GenesysDevIcon icon={GenesysDevIcons.AppCopy} /> Copy HTML
								</button>
							</div>
						))}
					</div>
				</React.Fragment>
			))}
		</div>
	);
}
