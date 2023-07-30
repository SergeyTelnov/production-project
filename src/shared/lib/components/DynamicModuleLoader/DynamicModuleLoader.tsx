import { Reducer } from "@reduxjs/toolkit";
import {
  StateSchemaKey,
  ReduxStoreWithMagager
} from "app/providers/StoreProvider/config/StateSchema";
import { useEffect, FC } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [nameKey in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithMagager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([nameKey, reducer]) => {
      store.reducerManager.add(nameKey as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${nameKey} reducer` });
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([nameKey, reducer]) => {
          store.reducerManager.remove(nameKey as StateSchemaKey);
          dispatch({ type: `@DESTROY ${nameKey} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
