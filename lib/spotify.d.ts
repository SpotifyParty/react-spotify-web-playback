import { IPlayOptions } from './types/spotify';
export declare function checkTracksStatus(tracks: string | string[], token: string): Promise<any>;
export declare function getDevices(token: string): Promise<any>;
export declare function getPlaybackState(token: string): Promise<any>;
export declare function pause(token: string): Promise<Response>;
export declare function play({ context_uri, deviceId, offset, uris }: IPlayOptions, token: string): Promise<Response>;
export declare function previous(token: string): Promise<Response>;
export declare function next(token: string): Promise<Response>;
export declare function removeTracks(tracks: string | string[], token: string): Promise<Response>;
export declare function saveTracks(tracks: string | string[], token: string): Promise<Response>;
export declare function seek(position: number, token: string): Promise<Response>;
export declare function setDevice(deviceId: string, token: string): Promise<Response>;
export declare function setVolume(volume: number, token: string): Promise<Response>;