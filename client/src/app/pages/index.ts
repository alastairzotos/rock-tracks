import loadable from '@loadable/component';

import { IPages } from '../../core';

export default {
    '/': loadable(async() => import('./HomePage')),
    '/track/:trackId': loadable(async() => import('./TrackDetails')),
} as IPages;
