import * as React from 'react';
import { IStylesOptions } from '../types/common';
import { IWebPlaybackTrack } from '../types/spotify';
interface IProps {
    isExternalDevice: boolean;
    isPlaying: boolean;
    onClickNext: () => void;
    onClickPrevious: () => void;
    onClickTogglePlay: () => void;
    nextTracks: IWebPlaybackTrack[];
    previousTracks: IWebPlaybackTrack[];
    styles: IStylesOptions;
}
export default class Controls extends React.PureComponent<IProps> {
    public render(): JSX.Element;
}
export {};
