import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import GptSearchPage from "./GPTsearchPage";
import Login from "./Login";
const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/search",
      element: <GptSearchPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
};

export default Body;
