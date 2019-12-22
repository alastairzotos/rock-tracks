import { createAction } from '../../core';
import { IActionTypes } from './types';
import { ITrack } from '../models';

export interface ISetCurrentTrackPayload {
    track: ITrack;
}

export const setCurrentTrack = (track: ITrack) =>
    createAction<IActionTypes, ISetCurrentTrackPayload>(
        IActionTypes.SetCurrentTrack,
        { track }
    );
