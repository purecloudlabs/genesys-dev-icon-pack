import React from 'react';
import { GenesysDevIcons } from './resources/genesys-dev-icons';

import './resources/genesys-dev-icons.css';

interface IProps {
	icon: GenesysDevIcons;
}

export default function GenesysDevIcon(props: IProps) {
	return <i className={`icon icon-${props.icon}`} />;
}
