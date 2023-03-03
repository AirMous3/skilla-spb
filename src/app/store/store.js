import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { callsReducer } from '@/entities';

const rootReducer = combineReducers({
  calls: callsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});
