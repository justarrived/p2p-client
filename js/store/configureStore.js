import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import reducers from '../reducers';
import promise from './promise';

export default function configureStore(onCompletion : () => void) : any {
  // Midelware and devTools
  const enhancer = compose(
    applyMiddleware(logger, thunk, promise),
    devTools({ name: 'justArrivedP2P', realtime: true }),
  );

  // Create the store
  const store = createStore(reducers, enhancer);

  // Persist the store
  persistStore(store, {
    storage: AsyncStorage,
  }, onCompletion);

  return store;
}
