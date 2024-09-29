/* eslint-disable */

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";


// Create the store with proper typing
export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
