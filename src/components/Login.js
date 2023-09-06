import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { checkValid } from "../utils/formValidation";
import { LOGIN_BG } from "../utils/srcLinks";
import { addUser } from "../utils/userSlice";
import Header from "./Header";

const Login = () => {
  const dispatch = useDispatch();
  const [signInstate, setsignInState] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  let email = useRef(null);
  let password = useRef(null);
  let name = useRef(null);
  const toggleForm = () => {
    seterrorMessage(null);
    email.current.value = null;
    password.current.value = null;
    setsignInState(!signInstate);
  };

  const handlelogin = () => {
    seterrorMessage(checkValid(email.current.value, password.current.value));
    if (errorMessage) return;
    if (!signInstate) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            // photoURL: "https://example.com/jane-q-user/profile.jpg",
          }).then(() => {
            const { uid, email, displayName } = userCredential.user;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          seterrorMessage("Invalid user details");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          seterrorMessage("Invalid user details");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-cover bg-center bg-no-repeat bg-fixed"
          src={LOGIN_BG}
          alt=""
        />
      </div>
      <div className="flex place-content-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black text-white w-3/12 top-24 h-auto rounded-md bg-opacity-80 flex flex-col"
        >
          <h1 className="font-bold text-3xl ml-10 mt-16 mb-5 cursor-default">
            {signInstate ? "Sign In" : "Sign Up"}
          </h1>
          {!signInstate && (
            <input
              ref={name}
              type="Username"
              placeholder="Username"
              className="p-3 my-5 mx-10 rounded-md  bg-zinc-700 focus:outline-none"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 my-5 mx-10 rounded-md bg-zinc-700 focus:outline-none"
          />
          {errorMessage === "Email is not valid" && (
            <span className="text-red-600 text-xs mx-10 -mt-5">
              {errorMessage}
            </span>
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-5 mx-10 rounded-md  bg-zinc-700 focus:outline-none"
          />
          {errorMessage !== "Email is not valid" && (
            <span className="text-red-600 text-xs -mt-5  mx-10 ">
              {errorMessage}
            </span>
          )}
          <button
            onClick={handlelogin}
            className="bg-red-700 text-white p-3 mx-10 my-10 font-semibold rounded-md "
          >
            {signInstate ? "Sign In" : "Sign Up"}
          </button>

          <span
            onClick={toggleForm}
            className=" font-light cursor-pointer mx-10  mb-16"
          >
            {signInstate
              ? "New to Netflix? Sign up now."
              : "Already a user? Sign in now."}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
