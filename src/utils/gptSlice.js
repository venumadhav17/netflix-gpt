import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovies = action.payload;
      state.movieNames = movieNames;
      state.MovieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
