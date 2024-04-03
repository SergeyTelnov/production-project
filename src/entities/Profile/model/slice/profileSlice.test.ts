import { updateProfileData } from "./../services/updateProfileData/updateProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

const data = {
  first: "Иван",
  lastname: "Иванов",
  age: 22,
  city: "Москва",
  username: "admin",
  currency: Currency.RUB,
  country: Country.Russia
};

describe("profileSlice", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))
    ).toEqual({ readonly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ readonly: true, validateError: undefined, data, form: data });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: "Иван" }
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: "Егор"
        })
      )
    ).toEqual({ form: { username: "Егор" } });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR]
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data: data
    });
  });
});
