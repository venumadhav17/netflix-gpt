import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search Button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // we can "useref" to get the event value
    dispatch(changeLanguage(e.target.value));
  };

  return (
<<<<<<< HEAD
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-36 mx-auto md:mx-0" src={LOGO} alt="NetflixLogo" />
      {user && (
        <div className="flex p-2 m-2 justify-between">
=======
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-36" src={LOGO} alt="NetflixLogo" />
      {user && (
        <div className="flex p-2 m-2">
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
              {/*}<option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="telugu">Telugu</option>
            <option value="spanish">Spanish</option>*/}
            </select>
          )}
          <button
            className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
<<<<<<< HEAD
          <img
            className="hidden md:block  w-12 h-12"
            src={user?.photoURL}
            alt="usericon"
          />
=======
          <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />
>>>>>>> 74452f30b78501bb6ad468cbdbf4e9fd58dac1de
          <button
            onClick={handleSignOut}
            className="bg-blue-600 text-center text-white font-bold p-3 mx-3"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
