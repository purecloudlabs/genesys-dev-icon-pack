import React, { useEffect, useState } from 'react';
import { GenesysDevIcon, GenesysDevIcons, GenesysDevIconsKey } from 'genesys-dev-icons';

import './IconGallery.scss';
import { DxButton, DxTextbox } from 'genesys-react-components';

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
				<DxTextbox
					label="Filter"
					className="filter-input"
					placeholder="try -solid"
					changeDebounceMs={-1}
					icon={GenesysDevIcons.AppSearch}
					clearButton={true}
					clearOnEscape={true}
					value={filterText}
					onChange={(value) => {
						setFilterText(value);
					}}
				/>
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
								<DxButton
									type="primary"
									onClick={() => navigator.clipboard.writeText(`<GenesysDevIcon icon={GenesysDevIcons.${iconName}} />`)}
								>
									<GenesysDevIcon icon={GenesysDevIcons.AppCopy} /> Copy React
								</DxButton>
								<DxButton type="primary" onClick={() => navigator.clipboard.writeText(`<i class="icon ${GenesysDevIcons[iconName]}"></i>`)}>
									<GenesysDevIcon icon={GenesysDevIcons.AppCopy} /> Copy HTML
								</DxButton>
							</div>
						))}
					</div>
				</React.Fragment>
			))}
		</div>
	);
}
