import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
<<<<<<< HEAD
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
=======
  return (
    <div className="w-48 pr-4">
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};
export default MovieCard;
