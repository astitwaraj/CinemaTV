import React, { useRef, useState } from "react";
import { LOGIN_BG } from "../utils/ImageLinks";
import { checkValid } from "../utils/formValidation";
import Header from "./Header";

const Login = () => {
  const [signInstate, setsignInState] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const toggleForm = () => {
    setsignInState(!signInstate);
  };
  const email = useRef(null);
  const password = useRef(null);
  const handlelogin = () => {
    seterrorMessage(checkValid(email.current.value, password.current.value));
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="" src={LOGIN_BG} alt="" />
      </div>
      <div className="flex place-content-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black text-white w-3/12 top-24 h-3/4 rounded-md bg-opacity-80 flex flex-col"
        >
          <h1 className="font-bold text-3xl ml-10 mt-16 mb-5">
            {signInstate ? "Sign In" : "Sign Up"}
          </h1>
          {!signInstate && (
            <input
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
          {errorMessage === "Password is not valid" && (
            <span className="text-red-600 text-xs -mt-5 mx-10 ">
              {errorMessage}
            </span>
          )}
          <button
            onClick={handlelogin}
            className="bg-red-600 text-white p-3 mx-10 my-5 font-semibold rounded-md "
          >
            {signInstate ? "Sign In" : "Sign Up"}
          </button>

          <span
            onClick={toggleForm}
            className=" font-light cursor-pointer mx-10 my-5"
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
