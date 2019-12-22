import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Epic } from 'redux-observable';

import {
    IActionTypes,
    setError,
    IFetchCurrentTrackPayload,
    setCurrentTrack
} from '../actions';

import { fetch$, IAction } from '../../core';


export const fetchCurrentTrackEpic: Epic = (action$) =>
    action$.ofType(IActionTypes.FetchCurrentTrack).pipe(
        switchMap((action: IAction) => 
            fetch$({
                method: 'GET',
                url: `/get-track`,
                query: {
                    id: (<IFetchCurrentTrackPayload>action.payload).trackId
                }
            }).pipe(
                switchMap((res) => of(setCurrentTrack(res.body))),
                catchError(() => of(setError())),
            )
        ),
    );
