import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, reducers)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)