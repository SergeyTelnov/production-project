import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const data = {
  first: "Иван",
  lastname: "Иванов",
  age: 22,
  city: "Москва",
  username: "admin",
  currency: Currency.RUB,
  country: Country.Russia
};

describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk();
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
