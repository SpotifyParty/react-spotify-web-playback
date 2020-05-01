import * as React from 'react';
import { IStylesOptions } from '../types/common';
import { ISpotifyDevice } from '../types/spotify';
interface IProps {
    deviceId?: string;
    devices: ISpotifyDevice[];
    onClickDevice: (deviceId: string) => any;
    open: boolean;
    styles: IStylesOptions;
}
export interface IState {
    isOpen: boolean;
}
export default class Devices extends React.PureComponent<IProps, IState> {
    public render(): JSX.Element;
    private handleClickSetDevice;
    private handleClickToggleDevices;
    constructor(props: IProps);
}
export {};
