import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover"
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
=======
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMG} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
  );
};
export default GptSearch;
