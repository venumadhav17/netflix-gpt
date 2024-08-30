import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
<<<<<<< HEAD

  if (movies === null) return;
  // if(!movies) return

  const mainMovie = movies[0];
=======
  if (movies === null) return;

  const mainMovie = movies[0];
  //console.log(mainMovie);
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de

  const { original_title, overview, id } = mainMovie;

  return (
<<<<<<< HEAD
    <div className="pt-[30%] bg-black md:pt-0">
=======
    <div>
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
