import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upComing: null,
    trailerVideo: null,
  },
  reducers: {
    addnowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addpopular: (state, action) => {
      state.popular = action.payload;
    },
    addtopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addupComing: (state, action) => {
      state.upComing = action.payload;
    },
    addtrailerVid: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addnowPlaying,
  addpopular,
  addtopRated,
  addupComing,
  addtrailerVid,
} = movieSlice.actions;
export default movieSlice.reducer;
