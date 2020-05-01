import * as React from 'react';
import { IStylesOptions } from '../types/common';
import { IPlayerTrack } from '../types/spotify';
interface IProps {
    handleFavoriteStatusChange: (status: boolean) => any;
    isActive: boolean;
    showSaveIcon: boolean;
    track: IPlayerTrack;
    token: string;
    styles: IStylesOptions;
    updateSavedStatus?: (fn: (status: boolean) => any) => any;
}
interface IState {
    isSaved: boolean;
}
export default class Info extends React.PureComponent<IProps, IState> {
    public componentDidMount(): Promise<void>;
    public componentDidUpdate(prevProps: IProps, prevState: IState): Promise<void>;
    public componentWillUnmount(): void;
    public render(): JSX.Element;
    private _isMounted;
    private handleClickIcon;
    private setStatus;
    private updateState;
    constructor(props: IProps);
}
export {};
