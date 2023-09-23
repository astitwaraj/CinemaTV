import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLang } = config.actions;
export default config.reducer;
