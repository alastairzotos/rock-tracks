import loadable from '@loadable/component';

import { IPages } from '../../core';

export default {
    '/': loadable(async() => import('./HomePage')),
} as IPages;
