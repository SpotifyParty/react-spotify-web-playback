"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var spotify_1 = require("./spotify");
var styles_1 = require("./styles");
var utils_1 = require("./utils");
exports.STATUS = utils_1.STATUS;
exports.TYPE = utils_1.TYPE;
var Actions_1 = require("./components/Actions");
var Content_1 = require("./components/Content");
var Controls_1 = require("./components/Controls");
var ErrorMessage_1 = require("./components/ErrorMessage");
var Info_1 = require("./components/Info");
var Loader_1 = require("./components/Loader");
var Player_1 = require("./components/Player");
var Slider_1 = require("./components/Slider");
var SpotifyWebPlayer = (function (_super) {
    __extends(SpotifyWebPlayer, _super);
    function SpotifyWebPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this._isMounted = false;
        _this.emptyTrack = {
            artists: '',
            durationMs: 0,
            id: '',
            image: '',
            name: '',
            uri: '',
        };
        _this.hasNewToken = false;
        _this.seekUpdateInterval = 100;
        _this.handleChangeRange = function (position) { return __awaiter(_this, void 0, void 0, function () {
            var track, token, percentage, state, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        track = this.state.track;
                        token = this.props.token;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        percentage = position / 100;
                        if (!this.isExternalPlayer) return [3, 3];
                        return [4, spotify_1.seek(Math.round(track.durationMs * percentage), token)];
                    case 2:
                        _a.sent();
                        this.updateState({
                            position: position,
                            progressMs: Math.round(track.durationMs * percentage),
                        });
                        return [3, 7];
                    case 3:
                        if (!this.player) return [3, 7];
                        return [4, this.player.getCurrentState()];
                    case 4:
                        state = (_a.sent());
                        if (!state) return [3, 6];
                        return [4, this.player.seek(Math.round(state.track_window.current_track.duration_ms * percentage))];
                    case 5:
                        _a.sent();
                        return [3, 7];
                    case 6:
                        this.updateState({ position: 0 });
                        _a.label = 7;
                    case 7: return [3, 9];
                    case 8:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3, 9];
                    case 9: return [2];
                }
            });
        }); };
        _this.handleClickTogglePlay = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.togglePlay()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); };
        _this.handleClickPrevious = function () { return __awaiter(_this, void 0, void 0, function () {
            var token, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!this.isExternalPlayer) return [3, 2];
                        token = this.props.token;
                        return [4, spotify_1.previous(token)];
                    case 1:
                        _a.sent();
                        this.syncTimeout = window.setTimeout(function () {
                            _this.syncDevice();
                        }, 300);
                        return [3, 4];
                    case 2:
                        if (!this.player) return [3, 4];
                        return [4, this.player.previousTrack()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3, 6];
                    case 6: return [2];
                }
            });
        }); };
        _this.handleClickNext = function () { return __awaiter(_this, void 0, void 0, function () {
            var token, error_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!this.isExternalPlayer) return [3, 2];
                        token = this.props.token;
                        return [4, spotify_1.next(token)];
                    case 1:
                        _a.sent();
                        this.syncTimeout = window.setTimeout(function () {
                            _this.syncDevice();
                        }, 300);
                        return [3, 4];
                    case 2:
                        if (!this.player) return [3, 4];
                        return [4, this.player.nextTrack()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [3, 6];
                    case 6: return [2];
                }
            });
        }); };
        _this.handleClickDevice = function (deviceId) { return __awaiter(_this, void 0, void 0, function () {
            var isUnsupported, token, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isUnsupported = this.state.isUnsupported;
                        token = this.props.token;
                        this.updateState({ currentDeviceId: deviceId });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4, spotify_1.setDevice(deviceId, token)];
                    case 2:
                        _a.sent();
                        if (!isUnsupported) return [3, 5];
                        return [4, this.togglePlay(true)];
                    case 3:
                        _a.sent();
                        return [4, this.syncDevice()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3, 7];
                    case 6:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [3, 7];
                    case 7: return [2];
                }
            });
        }); };
        _this.handleFavoriteStatusChange = function (isSaved) {
            var callback = _this.props.callback;
            _this.updateState({ isSaved: isSaved });
            callback(__assign({}, __assign({}, _this.state, { isSaved: isSaved }), { type: utils_1.TYPE.TRACK }));
        };
        _this.handlePlayerErrors = function (type, message) { return __awaiter(_this, void 0, void 0, function () {
            var status, isPlaybackError, isInitializationError, nextStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = this.state.status;
                        isPlaybackError = type === 'playback_error';
                        isInitializationError = type === 'initialization_error';
                        nextStatus = status;
                        if (!(this.player && !isPlaybackError)) return [3, 2];
                        return [4, this.player.disconnect()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (isInitializationError) {
                            nextStatus = utils_1.STATUS.UNSUPPORTED;
                        }
                        if (!isInitializationError && !isPlaybackError) {
                            nextStatus = utils_1.STATUS.ERROR;
                        }
                        this.updateState({
                            error: message,
                            errorType: type,
                            isInitializing: false,
                            isUnsupported: isInitializationError,
                            status: nextStatus,
                        });
                        return [2];
                }
            });
        }); };
        _this.handlePlayerStateChanges = function (state) { return __awaiter(_this, void 0, void 0, function () {
            var isPlaying, _a, album, artists, duration_ms, id, name_1, uri, volume, track, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        if (!state) return [3, 2];
                        isPlaying = !state.paused;
                        _a = state.track_window.current_track, album = _a.album, artists = _a.artists, duration_ms = _a.duration_ms, id = _a.id, name_1 = _a.name, uri = _a.uri;
                        return [4, this.player.getVolume()];
                    case 1:
                        volume = _b.sent();
                        track = {
                            artists: artists.map(function (d) { return d.name; }).join(', '),
                            durationMs: duration_ms,
                            id: id,
                            image: this.setAlbumImage(album),
                            name: name_1,
                            uri: uri,
                        };
                        this.updateState({
                            error: '',
                            errorType: '',
                            isActive: true,
                            isPlaying: isPlaying,
                            nextTracks: state.track_window.next_tracks,
                            previousTracks: state.track_window.previous_tracks,
                            track: track,
                            volume: volume,
                        });
                        return [3, 5];
                    case 2:
                        if (!this.isExternalPlayer) return [3, 4];
                        return [4, this.syncDevice()];
                    case 3:
                        _b.sent();
                        return [3, 5];
                    case 4:
                        this.updateState({
                            isActive: false,
                            isPlaying: false,
                            nextTracks: [],
                            position: 0,
                            previousTracks: [],
                            track: {
                                artists: '',
                                durationMs: 0,
                                id: '',
                                image: '',
                                name: '',
                                uri: '',
                            },
                        });
                        _b.label = 5;
                    case 5: return [3, 7];
                    case 6:
                        error_6 = _b.sent();
                        console.error(error_6);
                        return [3, 7];
                    case 7: return [2];
                }
            });
        }); };
        _this.handlePlayerStatus = function (_a) {
            var device_id = _a.device_id;
            return __awaiter(_this, void 0, void 0, function () {
                var _b, currentDeviceId, devices;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4, this.initializeDevices(device_id)];
                        case 1:
                            _b = _c.sent(), currentDeviceId = _b.currentDeviceId, devices = _b.devices;
                            this.updateState({
                                currentDeviceId: currentDeviceId,
                                deviceId: device_id,
                                devices: devices,
                                isInitializing: false,
                                status: device_id ? utils_1.STATUS.READY : utils_1.STATUS.IDLE,
                            });
                            return [2];
                    }
                });
            });
        };
        _this.handleToggleMagnify = function () {
            var magnifySliderOnHover = _this.props.magnifySliderOnHover;
            if (magnifySliderOnHover) {
                _this.updateState(function (prevState) {
                    return { isMagnified: !prevState.isMagnified };
                });
            }
        };
        _this.initializePlayer = function () {
            var _a = _this.props, name = _a.name, token = _a.token;
            _this.updateState({ isInitializing: true });
            _this.player = new window.Spotify.Player({
                getOAuthToken: function (cb) {
                    cb(token);
                },
                name: name,
            });
            _this.player.addListener('ready', _this.handlePlayerStatus);
            _this.player.addListener('not_ready', _this.handlePlayerStatus);
            _this.player.addListener('player_state_changed', _this.handlePlayerStateChanges);
            _this.player.addListener('initialization_error', function (error) {
                return _this.handlePlayerErrors('initialization_error', error.message);
            });
            _this.player.addListener('authentication_error', function (error) {
                return _this.handlePlayerErrors('authentication_error', error.message);
            });
            _this.player.addListener('account_error', function (error) {
                return _this.handlePlayerErrors('account_error', error.message);
            });
            _this.player.addListener('playback_error', function (error) {
                return _this.handlePlayerErrors('playback_error', error.message);
            });
            _this.player.connect();
        };
        _this.setVolume = function (volume) { return __awaiter(_this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = this.props.token;
                        if (!this.isExternalPlayer) return [3, 3];
                        return [4, spotify_1.setVolume(Math.round(volume * 100), token)];
                    case 1:
                        _a.sent();
                        return [4, this.syncDevice()];
                    case 2:
                        _a.sent();
                        return [3, 5];
                    case 3:
                        if (!this.player) return [3, 5];
                        return [4, this.player.setVolume(volume)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.updateState({ volume: volume });
                        return [2];
                }
            });
        }); };
        _this.syncDevice = function () { return __awaiter(_this, void 0, void 0, function () {
            var token, player, track, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._isMounted) {
                            return [2];
                        }
                        token = this.props.token;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, spotify_1.getPlaybackState(token)];
                    case 2:
                        player = _a.sent();
                        track = this.emptyTrack;
                        if (!player) {
                            throw new Error('No player');
                        }
                        if (player.item) {
                            track = {
                                artists: player.item.artists.map(function (d) { return d.name; }).join(', '),
                                durationMs: player.item.duration_ms,
                                id: player.item.id,
                                image: this.setAlbumImage(player.item.album),
                                name: player.item.name,
                                uri: player.item.uri,
                            };
                        }
                        this.updateState({
                            error: '',
                            errorType: '',
                            isActive: true,
                            isPlaying: player.is_playing,
                            nextTracks: [],
                            previousTracks: [],
                            progressMs: player.item ? player.progress_ms : 0,
                            status: utils_1.STATUS.READY,
                            track: track,
                            volume: player.device.volume_percent / 100,
                        });
                        return [3, 4];
                    case 3:
                        error_7 = _a.sent();
                        this.updateState({
                            error: error_7.message,
                            errorType: 'player_status',
                            status: utils_1.STATUS.ERROR,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        }); };
        _this.toggleOffset = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, currentDeviceId, isPlaying, _b, offset, token, uris;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.state, currentDeviceId = _a.currentDeviceId, isPlaying = _a.isPlaying;
                        _b = this.props, offset = _b.offset, token = _b.token, uris = _b.uris;
                        if (!(isPlaying && typeof offset === 'number' && Array.isArray(uris))) return [3, 2];
                        return [4, spotify_1.play({ deviceId: currentDeviceId, offset: offset, uris: uris }, token)];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [2];
                }
            });
        }); };
        _this.togglePlay = function (init) {
            if (init === void 0) { init = false; }
            return __awaiter(_this, void 0, void 0, function () {
                var _a, currentDeviceId, isPlaying, needsUpdate, _b, offset, token, shouldInitialize, playerState, error_8;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this.state, currentDeviceId = _a.currentDeviceId, isPlaying = _a.isPlaying, needsUpdate = _a.needsUpdate;
                            _b = this.props, offset = _b.offset, token = _b.token;
                            shouldInitialize = init || needsUpdate;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 12, , 13]);
                            if (!this.isExternalPlayer) return [3, 6];
                            if (!!isPlaying) return [3, 3];
                            return [4, spotify_1.play(__assign({ deviceId: currentDeviceId, offset: offset }, (shouldInitialize ? this.playOptions : undefined)), token)];
                        case 2:
                            _c.sent();
                            return [3, 5];
                        case 3: return [4, spotify_1.pause(token)];
                        case 4:
                            _c.sent();
                            this.updateState({ isPlaying: false });
                            _c.label = 5;
                        case 5:
                            this.syncTimeout = window.setTimeout(function () {
                                _this.syncDevice();
                            }, 300);
                            return [3, 11];
                        case 6:
                            if (!this.player) return [3, 11];
                            return [4, this.player.getCurrentState()];
                        case 7:
                            playerState = _c.sent();
                            if (!((!playerState && !!(this.playOptions.context_uri || this.playOptions.uris)) ||
                                (shouldInitialize && playerState && playerState.paused))) return [3, 9];
                            return [4, spotify_1.play(__assign({ deviceId: currentDeviceId, offset: offset }, (shouldInitialize ? this.playOptions : undefined)), token)];
                        case 8:
                            _c.sent();
                            return [3, 11];
                        case 9: return [4, this.player.togglePlay()];
                        case 10:
                            _c.sent();
                            _c.label = 11;
                        case 11:
                            if (needsUpdate) {
                                this.updateState({ needsUpdate: false });
                            }
                            return [3, 13];
                        case 12:
                            error_8 = _c.sent();
                            console.error(error_8);
                            return [3, 13];
                        case 13: return [2];
                    }
                });
            });
        };
        _this.updateSeekBar = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, isPlaying, progressMs, track, position, state, position, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this._isMounted) {
                            return [2];
                        }
                        _a = this.state, isPlaying = _a.isPlaying, progressMs = _a.progressMs, track = _a.track;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        if (!isPlaying) return [3, 4];
                        if (!this.isExternalPlayer) return [3, 2];
                        position = progressMs / track.durationMs;
                        position = Number.isFinite(position) ? position : 0;
                        this.updateState({
                            position: Number((position * 100).toFixed(1)),
                            progressMs: progressMs + this.seekUpdateInterval,
                        });
                        return [3, 4];
                    case 2:
                        if (!this.player) return [3, 4];
                        return [4, this.player.getCurrentState()];
                    case 3:
                        state = (_b.sent());
                        if (state) {
                            position = state.position / state.track_window.current_track.duration_ms;
                            this.updateState({ position: Number((position * 100).toFixed(1)) });
                        }
                        _b.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        error_9 = _b.sent();
                        console.error(error_9);
                        return [3, 6];
                    case 6: return [2];
                }
            });
        }); };
        _this.updateState = function (state) {
            if (!_this._isMounted) {
                return;
            }
            _this.setState(state);
        };
        _this.state = {
            currentDeviceId: '',
            deviceId: '',
            devices: [],
            error: '',
            errorType: '',
            isActive: false,
            isInitializing: false,
            isMagnified: false,
            isPlaying: false,
            isSaved: false,
            isUnsupported: false,
            needsUpdate: false,
            nextTracks: [],
            position: 0,
            previousTracks: [],
            status: utils_1.STATUS.IDLE,
            track: _this.emptyTrack,
            volume: 1,
        };
        _this.styles = styles_1.getMergedStyles(props.styles);
        return _this;
    }
    SpotifyWebPlayer.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._isMounted = true;
                        this.updateState({ status: utils_1.STATUS.INITIALIZING });
                        window.onSpotifyWebPlaybackSDKReady = this.initializePlayer;
                        return [4, utils_1.loadScript({
                                defer: true,
                                id: 'spotify-player',
                                source: 'https://sdk.scdn.co/spotify-player.js',
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SpotifyWebPlayer.prototype.componentDidUpdate = function (prevProps, prevState) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, currentDeviceId, deviceId, error, isInitializing, isPlaying, status, track, _b, autoPlay, callback, offset, playProp, showSaveIcon, token, uris, isReady, changedURIs, canPlay, shouldPlay;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.state, currentDeviceId = _a.currentDeviceId, deviceId = _a.deviceId, error = _a.error, isInitializing = _a.isInitializing, isPlaying = _a.isPlaying, status = _a.status, track = _a.track;
                        _b = this.props, autoPlay = _b.autoPlay, callback = _b.callback, offset = _b.offset, playProp = _b.play, showSaveIcon = _b.showSaveIcon, token = _b.token, uris = _b.uris;
                        isReady = prevState.status !== utils_1.STATUS.READY && status === utils_1.STATUS.READY;
                        changedURIs = Array.isArray(uris) ? !utils_1.isEqualArray(prevProps.uris, uris) : uris !== uris;
                        canPlay = !!currentDeviceId && !!(this.playOptions.context_uri || this.playOptions.uris);
                        shouldPlay = !!(changedURIs && isPlaying) || !!(isReady && (autoPlay || playProp));
                        if (!(canPlay && shouldPlay)) return [3, 2];
                        return [4, spotify_1.play(__assign({ deviceId: currentDeviceId, offset: offset }, this.playOptions), token)];
                    case 1:
                        _c.sent();
                        if (!this.state.isPlaying) {
                            this.updateState({ isPlaying: true });
                        }
                        if (this.isExternalPlayer) {
                            this.syncTimeout = window.setTimeout(function () {
                                _this.syncDevice();
                            }, 600);
                        }
                        return [3, 3];
                    case 2:
                        if (changedURIs && !isPlaying) {
                            this.updateState({ needsUpdate: true });
                        }
                        _c.label = 3;
                    case 3:
                        if (prevState.status !== status) {
                            callback(__assign({}, this.state, { type: utils_1.TYPE.STATUS }));
                        }
                        if (prevState.track.id !== track.id && track.id) {
                            callback(__assign({}, this.state, { type: utils_1.TYPE.TRACK }));
                            if (showSaveIcon) {
                                this.updateState({ isSaved: false });
                            }
                        }
                        if (!(prevState.currentDeviceId !== currentDeviceId && currentDeviceId)) return [3, 5];
                        return [4, this.handleDeviceChange()];
                    case 4:
                        _c.sent();
                        if (!isReady) {
                            callback(__assign({}, this.state, { type: utils_1.TYPE.DEVICE }));
                        }
                        _c.label = 5;
                    case 5:
                        if (!(prevState.isPlaying !== isPlaying)) return [3, 7];
                        this.handlePlaybackStatus();
                        return [4, this.handleDeviceChange()];
                    case 6:
                        _c.sent();
                        callback(__assign({}, this.state, { type: utils_1.TYPE.PLAYER }));
                        _c.label = 7;
                    case 7:
                        if (prevState.isInitializing && !isInitializing) {
                            if (error === 'authentication_error' && this.hasNewToken) {
                                this.hasNewToken = false;
                                this.initializePlayer();
                            }
                        }
                        if (prevProps.token && prevProps.token !== token) {
                            this.hasNewToken = true;
                            if (!isInitializing) {
                                this.initializePlayer();
                            }
                            else {
                                this.hasNewToken = true;
                            }
                        }
                        if (!(prevProps.play !== playProp && playProp !== isPlaying)) return [3, 9];
                        return [4, this.togglePlay(true)];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9:
                        if (!(prevProps.offset !== offset)) return [3, 11];
                        return [4, this.toggleOffset()];
                    case 10:
                        _c.sent();
                        _c.label = 11;
                    case 11:
                        if (error === 'No player') {
                            this.updateState({
                                currentDeviceId: deviceId,
                                error: '',
                                errorType: '',
                            });
                        }
                        return [2];
                }
            });
        });
    };
    SpotifyWebPlayer.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        if (this.player) {
            this.player.disconnect();
        }
        clearInterval(this.playerSyncInterval);
        clearInterval(this.playerProgressInterval);
        clearTimeout(this.syncTimeout);
    };
    Object.defineProperty(SpotifyWebPlayer.prototype, "isExternalPlayer", {
        get: function () {
            var _a = this.state, currentDeviceId = _a.currentDeviceId, deviceId = _a.deviceId, status = _a.status;
            return (currentDeviceId && currentDeviceId !== deviceId) || status === utils_1.STATUS.UNSUPPORTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpotifyWebPlayer.prototype, "playOptions", {
        get: function () {
            var uris = this.props.uris;
            var response = {
                context_uri: undefined,
                uris: undefined,
            };
            if (uris) {
                var ids = Array.isArray(uris) ? uris : [uris];
                if (ids.length > 1 && utils_1.getSpotifyURIType(ids[0]) === 'track') {
                    response.uris = ids.filter(function (d) { return utils_1.validateURI(d) && utils_1.getSpotifyURIType(d) === 'track'; });
                }
                else {
                    response.context_uri = ids[0];
                }
            }
            return response;
        },
        enumerable: true,
        configurable: true
    });
    SpotifyWebPlayer.prototype.handleDeviceChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isPlaying, syncExternalDeviceInterval, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isPlaying = this.state.isPlaying;
                        syncExternalDeviceInterval = this.props.syncExternalDeviceInterval;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!(this.isExternalPlayer && isPlaying && !this.playerSyncInterval)) return [3, 3];
                        return [4, this.syncDevice()];
                    case 2:
                        _a.sent();
                        this.playerSyncInterval = window.setInterval(this.syncDevice, syncExternalDeviceInterval * 1000);
                        _a.label = 3;
                    case 3:
                        if ((!isPlaying || !this.isExternalPlayer) && this.playerSyncInterval) {
                            clearInterval(this.playerSyncInterval);
                            this.playerSyncInterval = undefined;
                        }
                        return [3, 5];
                    case 4:
                        error_10 = _a.sent();
                        console.error(error_10);
                        return [3, 5];
                    case 5: return [2];
                }
            });
        });
    };
    SpotifyWebPlayer.prototype.handlePlaybackStatus = function () {
        var isPlaying = this.state.isPlaying;
        if (isPlaying) {
            if (!this.playerProgressInterval) {
                this.playerProgressInterval = window.setInterval(this.updateSeekBar, this.seekUpdateInterval);
            }
        }
        else {
            if (this.playerProgressInterval) {
                clearInterval(this.playerProgressInterval);
                this.playerProgressInterval = undefined;
            }
        }
    };
    SpotifyWebPlayer.prototype.initializeDevices = function (deviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, persistDeviceSelection, token, devices, currentDeviceId, savedDeviceId_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, persistDeviceSelection = _a.persistDeviceSelection, token = _a.token;
                        return [4, spotify_1.getDevices(token)];
                    case 1:
                        devices = (_b.sent()).devices;
                        currentDeviceId = deviceId;
                        if (persistDeviceSelection) {
                            savedDeviceId_1 = sessionStorage.getItem('rswpDeviceId');
                            if (!savedDeviceId_1 || !devices.find(function (d) { return d.id === savedDeviceId_1; })) {
                                sessionStorage.setItem('rswpDeviceId', currentDeviceId);
                            }
                            else {
                                currentDeviceId = savedDeviceId_1;
                            }
                        }
                        return [2, { currentDeviceId: currentDeviceId, devices: devices }];
                }
            });
        });
    };
    SpotifyWebPlayer.prototype.setAlbumImage = function (album) {
        var width = Math.max.apply(Math, __spread(album.images.map(function (d) { return d.width; })));
        var thumb = album.images.find(function (d) { return d.width === width; }) || {};
        return thumb.url;
    };
    SpotifyWebPlayer.prototype.render = function () {
        var _a = this.state, currentDeviceId = _a.currentDeviceId, deviceId = _a.deviceId, devices = _a.devices, error = _a.error, errorType = _a.errorType, isActive = _a.isActive, isMagnified = _a.isMagnified, isUnsupported = _a.isUnsupported, isPlaying = _a.isPlaying, nextTracks = _a.nextTracks, position = _a.position, previousTracks = _a.previousTracks, status = _a.status, track = _a.track, volume = _a.volume;
        var _b = this.props, name = _b.name, showSaveIcon = _b.showSaveIcon, token = _b.token, updateSavedStatus = _b.updateSavedStatus;
        var isReady = [utils_1.STATUS.READY, utils_1.STATUS.UNSUPPORTED].indexOf(status) >= 0;
        var isPlaybackError = errorType === 'playback_error';
        var output = React.createElement(Loader_1.default, { styles: this.styles });
        var info;
        if (isPlaybackError) {
            info = React.createElement("p", null, error);
        }
        if (isReady) {
            if (!info) {
                info = (React.createElement(Info_1.default, { handleFavoriteStatusChange: this.handleFavoriteStatusChange, showSaveIcon: showSaveIcon, isActive: isActive, styles: this.styles, token: token, track: track, updateSavedStatus: updateSavedStatus }));
            }
            output = (React.createElement(React.Fragment, null,
                React.createElement("div", null, info),
                React.createElement(Controls_1.default, { isExternalDevice: this.isExternalPlayer, isPlaying: isPlaying, onClickNext: this.handleClickNext, onClickPrevious: this.handleClickPrevious, onClickTogglePlay: this.handleClickTogglePlay, nextTracks: nextTracks, previousTracks: previousTracks, styles: this.styles }),
                React.createElement(Actions_1.default, { currentDeviceId: currentDeviceId, devices: devices, isDevicesOpen: isUnsupported && !deviceId, onClickDevice: this.handleClickDevice, setVolume: this.setVolume, styles: this.styles, volume: volume })));
        }
        if (status === utils_1.STATUS.ERROR) {
            output = (React.createElement(ErrorMessage_1.default, { styles: this.styles },
                name,
                ": ",
                error));
        }
        return (React.createElement(Player_1.default, { styles: this.styles },
            isReady && (React.createElement(Slider_1.default, { isMagnified: isMagnified, onChangeRange: this.handleChangeRange, onToggleMagnify: this.handleToggleMagnify, position: position, styles: this.styles })),
            React.createElement(Content_1.default, { styles: this.styles }, output)));
    };
    SpotifyWebPlayer.defaultProps = {
        callback: function () { return undefined; },
        magnifySliderOnHover: false,
        name: 'Spotify Web Player',
        showSaveIcon: false,
        syncExternalDeviceInterval: 5,
    };
    return SpotifyWebPlayer;
}(React.PureComponent));
exports.default = SpotifyWebPlayer;
