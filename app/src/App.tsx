import React from 'react';
import './App.scss';
import './typography.scss';
import IconGallery from './components/icongallery/IconGallery';

const iconNames = [
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
];

function App() {
	return (
		<div className="app">
			<div className="app-content">
				<h1>Genesys Dev Icon Pack</h1>
				<IconGallery />
			</div>
		</div>
	);
}

export default App;
