/// <reference types="react" />
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
export default function GenesysDevIcon(props: IProps): JSX.Element;
export {};
