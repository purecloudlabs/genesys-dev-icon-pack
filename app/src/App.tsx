import React from 'react';
import './App.scss';
import './typography.scss';
import IconGallery from './components/icongallery/IconGallery';

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
