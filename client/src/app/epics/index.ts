import { combineEpics } from 'redux-observable';

import { fetchTracksEpic } from './fetchTracksEpic';
import { fetchCurrentTrackEpic } from './fetchCurrentTrackEpic';

export default combineEpics(
    fetchTracksEpic,
    fetchCurrentTrackEpic,
);
