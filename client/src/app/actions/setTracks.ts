import { createAction } from '../../core/actions';
import { IActionTypes } from './types';
import { ITrack } from '../models';

export interface ISetTracksPayload {
    tracks: ITrack[];
}

export const setTracks = (tracks: ITrack[]) =>
    createAction<IActionTypes, ISetTracksPayload>(
        IActionTypes.SetTracks,
        { tracks }
    );
