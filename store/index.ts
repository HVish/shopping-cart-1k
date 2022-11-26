import { createWrapper } from 'next-redux-wrapper';

import { createStore } from './helper';

export const ReduxWrapper = createWrapper(createStore);
