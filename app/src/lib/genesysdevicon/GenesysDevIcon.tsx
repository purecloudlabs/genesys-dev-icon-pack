import React from 'react';

import './resources/genesys-dev-icons.css';

interface IProps {
	icon: string;
}

export default function GenesysDevIcon(props: IProps) {
	return <i className={`icon icon-${props.icon}`} />;
}
