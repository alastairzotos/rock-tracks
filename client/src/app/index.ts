import epics from './epics';
import reducers from './reducers';

import { IModule } from '../core';

export default {
    epic: epics,
    reducer: reducers
} as IModule;
