import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
<<<<<<< HEAD
    gptMovies: null,
    movieNames: null,
    movieResults: null,
=======
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
<<<<<<< HEAD
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovies = action.payload;
      state.movieNames = movieNames;
      state.MovieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
=======
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
export default gptSlice.reducer;
