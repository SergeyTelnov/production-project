import { LoginShema } from "features/AuthByUsername";
import {
  loginActions,
  loginReducer
} from "features/AuthByUsername/model/slice/loginSlice";
import { DeepPartial } from "@reduxjs/toolkit";

describe("loginSlice", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginShema> = { username: "username" };
    expect(
      loginReducer(state as LoginShema, loginActions.setUserName("username"))
    ).toEqual({ username: "username" });
  });
  test("test set password", () => {
    const state: DeepPartial<LoginShema> = { password: "12345678" };
    expect(
      loginReducer(state as LoginShema, loginActions.setPassword("12345678"))
    ).toEqual({ password: "12345678" });
  });
});
