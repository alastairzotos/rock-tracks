import { createAction } from '../../core/actions';
import { IActionTypes } from './types';

export const setError = () => createAction<IActionTypes, never>(IActionTypes.SetError);
