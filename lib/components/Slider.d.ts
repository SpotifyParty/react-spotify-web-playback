import * as React from 'react';
import { IStylesOptions } from '../types/common';
interface IProps {
    isMagnified: boolean;
    onToggleMagnify: () => void;
    onChangeRange: (position: number) => void;
    position: number;
    styles: IStylesOptions;
}
export default class Slider extends React.PureComponent<IProps> {
    private handleChangeRange;
    public render(): JSX.Element;
}
export {};
