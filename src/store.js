import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage

const initialState = {}
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['toast'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, initialState, applyMiddleware(thunk))
export const persistor = persistStore(store)
