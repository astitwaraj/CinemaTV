import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Browse from "./components/Homepage/Browse";
import Login from "./components/Login";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PlayMovies from "./components/PlayMovies";
import GPTsearchPage from "./components/Search/GPTsearchPage";
import Videobg from "./components/Videobg";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/browse/:movieID",
        element: <MovieDetail />,
      },
      {
        path: "/playing",
        element: <PlayMovies />,
      },
      {
        path: "/browse/:movieID/trailer",
        element: <Videobg />,
      },
      {
        path: "/browse/search",
        element: <GPTsearchPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
