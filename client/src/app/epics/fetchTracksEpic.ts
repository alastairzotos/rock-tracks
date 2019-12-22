import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Epic } from 'redux-observable';

import { IActionTypes, setTracks, setError } from '../actions';
import { fetch$ } from '../../core';


export const fetchTracksEpic: Epic = (action$) =>
    action$.ofType(IActionTypes.FetchTracks).pipe(
        switchMap(() => 
            fetch$({
                method: 'GET',
                url: '/get-tracks',
            }).pipe(
                switchMap((res) => of(setTracks(res.body.results))),
                catchError(() => of(setError())),
            )
        ),
    );
