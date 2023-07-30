import type {
  StateSchema,
  ReduxStoreWithMagager,
  ThunkConfig
} from "./config/StateSchema";
import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithMagager,
  AppDispatch,
  ThunkConfig
};
