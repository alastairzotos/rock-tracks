import { createAction } from '../../core/actions';
import { IActionTypes } from './types';

export const fetchTracks = () => createAction<IActionTypes, never>(IActionTypes.FetchTracks);
