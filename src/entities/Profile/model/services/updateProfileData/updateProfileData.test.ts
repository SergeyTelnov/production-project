import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileError } from "../../types/profile";

const data = {
  first: "Иван",
  lastname: "Иванов",
  age: 22,
  city: "Москва",
  username: "admin",
  currency: Currency.RUB,
  country: Country.Russia
};

describe("updateProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: "" }
      }
    });
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
