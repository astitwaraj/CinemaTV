import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptPageView: false,
    gptMovieList: null,
    tenmovies: null,
  },
  reducers: {
    updatePageStatus: (state, actions) => {
      state.gptPageView = actions.payload;
    },
    updateMovieLits: (state, actions) => {
      state.gptMovieList = actions.payload;
    },
    updatetenmovie: (state, actions) => {
      state.tenmovies = actions.payload;
    },
    deleteAll: (state, actions) => {
      state.tenmovies = null;
    },
  },
});

export const { updatePageStatus, deleteAll, updatetenmovie, updateMovieLits } =
  gptSlice.actions;
export default gptSlice.reducer;
