import React, { useEffect, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons, GenesysDevIconsKey } from 'genesys-dev-icons';

import './IconGallery.scss';

interface IconSet {
	name: string;
	iconNames: GenesysDevIconsKey[];
}

export default function IconGallery() {
	const defaultIconSets = [] as IconSet[];
	defaultIconSets.push({
		name: 'Application Icons',
		iconNames: Object.keys(GenesysDevIcons).filter((key) => key.startsWith('App')) as GenesysDevIconsKey[],
	});
	defaultIconSets.push({
		name: 'Destination Icons',
		iconNames: Object.keys(GenesysDevIcons).filter((key) => key.startsWith('Dest')) as GenesysDevIconsKey[],
	});
	defaultIconSets.push({
		name: 'Information Architecture Icons',
		iconNames: Object.keys(GenesysDevIcons).filter((key) => key.startsWith('Ia')) as GenesysDevIconsKey[],
	});
	defaultIconSets.push({
		name: 'Brand Icons',
		iconNames: Object.keys(GenesysDevIcons).filter((key) => key.startsWith('Brand')) as GenesysDevIconsKey[],
	});
	defaultIconSets.push({
		name: 'Editor Icons',
		iconNames: Object.keys(GenesysDevIcons).filter((key) => key.startsWith('Editor')) as GenesysDevIconsKey[],
	});

	const [iconSets, setIconSets] = useState(defaultIconSets);
	const [filterText, setFilterText] = useState('');

	// Filter icons
	useEffect(() => {
		if (!filterText || filterText.trim() === '') return setIconSets(defaultIconSets);
		const newSet = [...defaultIconSets];
		newSet.forEach(
			(iconSet) =>
				(iconSet.iconNames = iconSet.iconNames.filter((iconName) => GenesysDevIcons[iconName].toLowerCase().includes(filterText)))
		);
		setIconSets(newSet);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterText]);

	return (
		<div className="icon-gallery">
			<div className="filter-row">
				Filter:{' '}
				<div className="text-input-container">
					<input
						type="text"
						onChange={(e) => {
							setFilterText(e.target.value);
							console.log(e.target.value);
						}}
						value={filterText}
					/>
					<button type="button" className="clear-button" onClick={() => setFilterText('')}>
						<GenesysDevIcon icon={GenesysDevIcons.AppTimes} />
					</button>
				</div>
			</div>
			{iconSets.map((iconSet) => (
				<React.Fragment key={iconSet.name}>
					<h2>{iconSet.name}</h2>
					<div className="icon-set">
						{iconSet.iconNames.length === 0 ? <em>No icons match the filter</em> : ''}
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
									onClick={() => navigator.clipboard.writeText(`<i class="icon ${GenesysDevIcons[iconName]}"></i>`)}
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
