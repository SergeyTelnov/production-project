import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserShema;

  // async reducer
  loginForm?: LoginShema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithMagager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
