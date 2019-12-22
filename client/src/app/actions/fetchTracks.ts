import { createAction } from '../../core';
import { IActionTypes } from './types';

export const fetchTracks = () => createAction<IActionTypes, never>(IActionTypes.FetchTracks);
