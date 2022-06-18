import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

import { rootReducer } from './rootReducer';

const middleWares = [];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);

// const loggerMiddleWare = (store) => (next) => (action) => {
//     if (!action.type) {
//       return next(action);
//     }

//     console.log('Type', action.type);
//     console.log('Payload', action.payload);
//     console.log('CurrentState', store.getState());

//     next(action);
//     console.log('NextState', store.getState());
//   };
