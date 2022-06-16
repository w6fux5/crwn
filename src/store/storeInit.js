import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

import { rootReducer } from './rootReducer';

const middleWares = [logger];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
