import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update the store
  const dispatch = useDispatch();

<<<<<<< HEAD
  const popularMovies = useSelector((store) => store.movies.popularMovies);

=======
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
<<<<<<< HEAD

=======
    //console.log(json.results);
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
<<<<<<< HEAD
    !popularMovies && getPopularMovies();
=======
    getPopularMovies();
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
  }, []);
};

export default usePopularMovies;
