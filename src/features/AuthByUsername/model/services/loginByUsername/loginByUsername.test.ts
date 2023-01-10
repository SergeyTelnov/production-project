import { StateSchema } from "app/providers/StoreProvider";
import { loginByUsername } from "./loginByUserName";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
  test("success login", async () => {
    const userValue = { username: "username", id: "1" };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "username",
      password: "12345678"
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "username",
      password: "12345678"
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
