import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTrailerVideo from "../../useHooks/useTrailerVideo";
import { DISPLAY_VID } from "../../utils/srcLinks";

const Watchtrailer = () => {
  const { movieID } = useParams();
  useTrailerVideo(movieID);
  const displayKey = useSelector((store) => store.movies?.trailerVideo);
  if (!displayKey)
    return (
      <h1 className="text-white text-5xl pt-80 px-[38%]">⚠️Not Available</h1>
    );
  const { key } = displayKey;
  return (
    <>
      <div>
        <iframe
          className="w-screen aspect-video"
          title="CinemaTV"
          src={
            DISPLAY_VID +
            key +
            `?&vq=hd1080&autoplay=1&modestbranding=0&rel=0&loop=1&playlist=` +
            key
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share,fullscreen"
        ></iframe>
      </div>
    </>
  );
};

export default Watchtrailer;
