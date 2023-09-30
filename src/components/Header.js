import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLang } from "../utils/config";
import { auth } from "../utils/firebase";
import { deleteAll, updatePageStatus } from "../utils/gptSlice";
import { LANG_ARR, LOGO_URL } from "../utils/srcLinks";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.gpt.gptPageView);
  const dispatch = useDispatch();

  const handleLang = (e) => {
    dispatch(changeLang(e.target.value));
  };
  const handleGptViewH = () => {
    dispatch(updatePageStatus(false));
    dispatch(deleteAll());
  };
  const handleGptViewS = () => {
    dispatch(updatePageStatus(true));
  };

  const onScroll = () => {
    window.scrollY > 540 ? setScrolled(true) : setScrolled(false);
  };
  window.addEventListener("scroll", onScroll);

  const signOutButton = () => {
    gptView && dispatch(updatePageStatus());
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
                className="text-white px-1 mx-2 md:px-2 py-1 rounded-md bg-gray-900"
              >
                {LANG_ARR.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <Link to={"/browse"}>
              <button
                onClick={handleGptViewH}
                className="bg-red-500 m-1  rounded-md text-black px-1 md:px-2 py-1"
              >
                {"Homepage"}
              </button>
            </Link>
            <Link to={"/browse/search"}>
              <button
                onClick={handleGptViewS}
                className="bg-red-500 m-1 md:m-2 rounded-md text-black px-1 md:px-2 py-1"
              >
                {"Search"}
              </button>
            </Link>

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
