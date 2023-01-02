import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithMagager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { useEffect, FC } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducerList = {
  [nameKey in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithMagager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([nameKey, reducer]: ReducerListEntry) => {
      store.reducerManager.add(nameKey, reducer);
      dispatch({ type: `@INIT ${nameKey} reducer` });
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([nameKey, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(nameKey);
            dispatch({ type: `@DESTROY ${nameKey} reducer` });
          }
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
