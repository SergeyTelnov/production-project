import { StateSchema } from "./StateSchema";
import { configureStore } from "@reduxjs/toolkit";
import { counterRerucer } from "entities/Counter";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterRerucer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
