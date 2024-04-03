import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
  test("should return error", () => {
    const data = {
      first: "Иван",
      lastname: "Иванов",
      age: 22,
      city: "Москва",
      username: "admin",
      currency: Currency.RUB,
      country: Country.Russia
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
