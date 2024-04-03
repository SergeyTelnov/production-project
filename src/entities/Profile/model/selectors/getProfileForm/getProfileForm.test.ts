import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
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
        form: data
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
