import { applyMiddleware, createStore, compose } from 'redux';

// Middleware
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Saga
import createSagaMiddleware from 'redux-saga';

// Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducer
import { rootReducer } from './rootReducer';

import { rootSaga } from './rootSaga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const saga = createSagaMiddleware();

const middleWares = [
  // process.env.NODE_ENV !== 'production' && logger,
  thunk,
  saga,
].filter(Boolean);

const persisterReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

saga.run(rootSaga);

export const store = createStore(persisterReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
