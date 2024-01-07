import {combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
const rootReducser = combineReducers({user:userReducer})

const persistConfig = {
  key:"root",
  version:1,
  storage,
}


const persistedReducer = persistReducer(persistConfig , rootReducser)





export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => {
    return getDefaultMiddleware({
        serializableCheck:false
    })
  }
})

export const persistor = persistStore(store)