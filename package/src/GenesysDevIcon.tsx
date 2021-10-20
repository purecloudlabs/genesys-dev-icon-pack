import * as React from 'react';
import { GenesysDevIcons } from './resources/genesys-dev-icons';

import './resources/genesys-dev-icons.css';

interface IProps {
	icon: GenesysDevIcons;
	className?: string;
	onClick?: GenesysDevIconClicked;
}

export interface GenesysDevIconClicked {
	(): void;
}

export default function GenesysDevIcon(props: IProps) {
	return (
		<i
			className={`icon icon-${props.icon} ${props.className || ''}`}
			onClick={(e) => {
				if (props.onClick) {
					e.stopPropagation();
					props.onClick();
				}
			}}
		/>
	);
}
