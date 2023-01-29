import { ProfileSchema, Profile } from "./../types/profile";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProfileSchema = {
  data: undefined,
  readonly: true,
  isLoading: false,
  error: undefined
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
