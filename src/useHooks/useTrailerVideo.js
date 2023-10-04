import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtrailerVid } from "../utils/movieSlice";
import { API_OPTIONS, TRAILER } from "../utils/srcLinks";

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const data = await fetch(TRAILER + id + "/videos", API_OPTIONS);
    const json = await data.json();
    const trailerVid = json.results.filter((video) => {
      return video.name === "Official Trailer" || video.type === "Trailer";
    });
    dispatch(addtrailerVid(trailerVid[0]));
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);
};
export default useTrailerVideo;
