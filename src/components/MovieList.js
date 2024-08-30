import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
<<<<<<< HEAD
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
=======
      <h1 className="text-3xl py-4 text-white">{title}</h1>
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {/*<MovieCard posterPath={movies[0].poster_path} />*/}
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
