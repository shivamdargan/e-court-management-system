import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import profileReducer from "./Reducers/profile";
import caseReducer from "./Reducers/case";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'profile',
  version: 1,
  storage:storageSession,
}
const persistedProfileReducer = persistReducer(persistConfig, profileReducer)
const persistedCaseReducer = persistReducer(persistConfig, caseReducer);


const store = configureStore({
  reducer:{
  user:persistedProfileReducer, 
  case: persistedCaseReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

