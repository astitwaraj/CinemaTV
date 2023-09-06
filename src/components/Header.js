import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO_URL } from "../utils/srcLinks";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const signOutButton = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      {!user ? (
        <div className="absolute z-40">
          <img className="w-2/12 contrast-125 " src={LOGO_URL} alt="" />
        </div>
      ) : (
        <div className=" flex flex-row w-screen text-white fixed z-20 bg-gradient-to-b from-black justify-between px-12 py-2">
          <div>
            <img
              className="w-32 contrast-125 p-1 items-center "
              src={LOGO_URL}
              alt=""
            />
          </div>
          <div className="flex flex-row items-center text-sm font-semibold">
            <span className="p-2 m-3">{user.displayName}</span>
            <button
              onClick={signOutButton}
              className="bg-red-500 rounded-md text-black px-2 py-1"
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
