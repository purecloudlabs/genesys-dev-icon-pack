import * as React from 'react';
import { GenesysDevIcons } from './resources/genesys-dev-icons';

import './resources/genesys-dev-icons.css';

interface IProps {
	icon: GenesysDevIcons;
	className?: string;
	onClick?: GenesysDevIconClicked;
	fontSize?: string;
}

export interface GenesysDevIconClicked {
	(): void;
}

export default function GenesysDevIcon(props: IProps) {
	const style = {} as any;
	if (props.fontSize) style.fontSize = props.fontSize;
	return (
		<i
			className={`icon icon-${props.icon} ${props.className || ''}`}
			style={style}
			onClick={(e) => {
				if (props.onClick) {
					e.stopPropagation();
					e.preventDefault();
					props.onClick();
				}
			}}
		/>
	);
}
