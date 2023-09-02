import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/ImageLinks";
import { auth } from "../utils/firebase";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex flex-row mx-5 absolute z-40 items-center">
      <div>
        <img className="w-2/12 contrast-125 " src={LOGO_URL} alt="" />
      </div>
      {user && (
        <div className="flex flex-row items-center mx-4">
          <span className="p-2 m-3">{user.displayName}</span>
          <button
            onClick={signOutButton}
            className="bg-red-500 rounded-md px-2 py-1"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
