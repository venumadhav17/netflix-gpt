import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //const [trailerId, setTrailerId] = useState(null);
  // fetch trailer video && updating the store with trailer video data
  // api video
<<<<<<< HEAD

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
=======
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
<<<<<<< HEAD

    const filterData = json.results.filter((video) => video.type === "Trailer");

    //const trailer = filterData[0];
    const trailer = filterData.length ? filterData[0] : json.results[0];

=======
    //console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    //const trailer = filterData[0];
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
    //setTrailerId(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
<<<<<<< HEAD
    !trailerVideo && getMovieVideos();
=======
    getMovieVideos();
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
  }, []);
};
export default useMovieTrailer;
