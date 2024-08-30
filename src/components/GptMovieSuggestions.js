<<<<<<< HEAD
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  //const {movieResults, movieNames} = gpt
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {/*<h1>{movieNames[0]}</h1>*/}
        {movieNames.map((movieName, index) => (
          <MovieCard
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
=======
const GptMovieSuggestions = () => {
  return <div>GptMovieSuggestions</div>;
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
};
export default GptMovieSuggestions;
