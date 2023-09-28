import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLang } from "../utils/config";
import { auth } from "../utils/firebase";
import { deleteAll, updatePageStatus } from "../utils/gptSlice";
import { LANG_ARR, LOGO_URL } from "../utils/srcLinks";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.gpt.gptPageView);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLang = (e) => {
    dispatch(changeLang(e.target.value));
  };
  const handleGptView = () => {
    dispatch(updatePageStatus(), deleteAll());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const onScroll = () => {
    window.scrollY > 540 ? setScrolled(true) : setScrolled(false);
  };
  window.addEventListener("scroll", onScroll);

  const signOutButton = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <>
      {!user ? (
        <div className="absolute  z-40">
          <img
            className="w-1/2 mx-auto md:mx-0 md:w-2/12 contrast-125 "
            src={LOGO_URL}
            alt=""
          />
        </div>
      ) : (
        <div
          className={
            scrolled
              ? "flex flex-col md:flex-row w-screen text-white fixed z-20  justify-between px-2 md:px-12 md:py-2 bg-black"
              : "flex flex-col md:flex-row w-screen text-white fixed z-20  justify-between px-2 md:px-12 md:py-2 bg-gradient-to-b from-black"
          }
        >
          <div className="mx-auto md:mx-0">
            <img className="w-40 contrast-125" src={LOGO_URL} alt="" />
          </div>

          <div className="flex flex-row items-center text-sm font-semibold mx-auto md:mx-0">
            {gptView && (
              <select
                onChange={handleLang}
                className="text-white px-1  md:px-2 py-1 rounded-md bg-gray-900"
              >
                {LANG_ARR.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGptView}
              className="bg-red-500 m-1 md:m-2 rounded-md text-black px-1 md:px-2 py-1"
            >
              {!gptView ? "GPT Search" : "Homepage"}
            </button>
            <span className="bg-red-500 rounded-md text-black px-1 md:px-2 py-1">
              {user.displayName}
            </span>
            <button
              onClick={signOutButton}
              className="bg-red-500 rounded-md m-1 md:m-2 text-black px-1 md:px-2 py-1"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
