import { CounterSchema } from "entities/Counter";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserShema;
  loginForm: LoginShema;
}
