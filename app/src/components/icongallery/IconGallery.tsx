import React from 'react';
import GenesysDevIcon from '../../lib/genesysdevicon/GenesysDevIcon';
import './IconGallery.scss';

const iconSets = [
	{
		name: 'Application Icons',
		iconNames: [
			'app-check-solid',
			'app-check-stroke',
			'app-check',
			'app-copy',
			'app-ellipsis',
			'app-link',
			'app-pin-solid',
			'app-pin-stroke',
			'app-plus-solid',
			'app-plus-stroke',
			'app-plus',
			'app-times-solid',
			'app-times-stroke',
		],
	},
	{
		name: 'Destination Icons',
		iconNames: [
			'dest-api',
			'dest-app-foundry',
			'dest-blog',
			'dest-blueprint',
			'dest-forum',
			'dest-guide',
			'dest-rocket',
			'dest-tool',
			'dest-tutorial',
			'dest-video',
		],
	},
];

export default function IconGallery() {
	return (
		<div className="icon-gallery">
			{iconSets.map((iconSet) => (
				<React.Fragment key={iconSet.name}>
					<h2>{iconSet.name}</h2>
					<div className="icon-set">
						{iconSet.iconNames.map((iconName) => (
							<div key={iconName} className="icon-container">
								<GenesysDevIcon icon={iconName} />
								<span>{iconName}</span>
								<button
									type="button"
									className="button button-primary"
									onClick={() => navigator.clipboard.writeText(`<GenesysDevIcon icon="${iconName}" />`)}
								>
									<GenesysDevIcon icon="app-copy" /> Copy React
								</button>
								<button
									type="button"
									className="button button-primary"
									onClick={() => navigator.clipboard.writeText(`<i class="icon ${iconName}" />`)}
								>
									<GenesysDevIcon icon="app-copy" /> Copy HTML
								</button>
							</div>
						))}
					</div>
				</React.Fragment>
			))}
		</div>
	);
}
