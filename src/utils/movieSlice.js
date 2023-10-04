import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upComing: null,
    trailerVideo: null,
    currentMovie: null,
    similarMovies: null,
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
    addCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    updateSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
  },
});

export const {
  addnowPlaying,
  addCurrentMovie,
  addpopular,
  addtopRated,
  addupComing,
  addtrailerVid,
  updateSimilarMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
