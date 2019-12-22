import { createAction } from '../../core';
import { IActionTypes } from './types';

export interface IFetchCurrentTrackPayload {
    trackId: number;
}

export const fetchCurrentTrack = (trackId: number) => 
    createAction<IActionTypes, IFetchCurrentTrackPayload>(
        IActionTypes.FetchCurrentTrack,
        { trackId }
    );
