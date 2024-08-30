import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update the store
  const dispatch = useDispatch();

<<<<<<< HEAD
  const nowPlayingMovies = useSelector(
    (store) => store.movies.addNowPlayingMovies
  );

=======
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
<<<<<<< HEAD

=======
    //console.log(json.results);
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
<<<<<<< HEAD
    !nowPlayingMovies && getNowPlaying();
=======
    getNowPlaying();
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
  }, []);
};

export default useNowPlayingMovies;
