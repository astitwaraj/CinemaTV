import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upComing: null,
    trailerVideo: {
      loading: true,
      url: null,
    },
    currentMovie: null,
    similarMovies: {
      loading: true,
      url: null,
    },
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
      state.trailerVideo.loading = false;
      state.trailerVideo.url = action.payload;
    },
    addCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    updateSimilarMovies: (state, action) => {
      state.similarMovies.loading = false;
      state.similarMovies.url = action.payload;
    },
    delVid: (state) => {
      state.trailerVideo.loading = true;
      state.trailerVideo.url = null;
    },
    setTrailerVidLoading: (state, action) => {
      state.trailerVideo.loading = action.payload;
    },
  },
});

export const {
  delVid,
  addnowPlaying,
  addCurrentMovie,
  addpopular,
  addtopRated,
  addupComing,
  addtrailerVid,
  updateSimilarMovies,
  setTrailerVidLoading,
} = movieSlice.actions;
export default movieSlice.reducer;
