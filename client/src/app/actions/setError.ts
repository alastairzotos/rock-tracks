import { createAction } from '../../core';
import { IActionTypes } from './types';

export const setError = () => createAction<IActionTypes, never>(IActionTypes.SetError);
