import * as React from 'react';
import { IStylesOptions } from '../types/common';
interface IProps {
    setVolume: (volume: number) => any;
    styles: IStylesOptions;
    volume: number;
}
interface IState {
    isOpen: boolean;
    volume: number;
}
export default class Volume extends React.PureComponent<IProps, IState> {
    public componentDidUpdate(prevProps: IProps): void;
    public render(): JSX.Element;
    private timeout;
    private handleClick;
    private handleChangeSlider;
    private handleDragEndSlider;
    constructor(props: IProps);
}
export {};
