import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptPageView: false,
  },
  reducers: {
    updatePageStatus: (state) => {
      state.gptPageView = !state.gptPageView;
    },
  },
});

export const { updatePageStatus } = gptSlice.actions;
export default gptSlice.reducer;
