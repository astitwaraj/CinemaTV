import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTrailerVideo from "../../useHooks/useTrailerVideo";
import { DISPLAY_VID } from "../../utils/srcLinks";

const Watchtrailer = () => {
  const { movieID } = useParams();
  useTrailerVideo(movieID);
  const displayKey = useSelector((store) => store.movies?.trailerVideo);
  if (!displayKey.url && !displayKey.loading)
    return (
      <h1 className="text-white text-3xl md:text-5xl pt-80 px-[18%] md:px-[38%]">
        ⚠️Not Available
      </h1>
    );
  const { url } = displayKey;

  return (
    <>
      {displayKey.loading ? (
        <div className="pt-44 md:pt-0">
          <iframe
            className="w-screen aspect-video"
            title="CinemaTV"
            src={
              DISPLAY_VID +
              url?.key +
              `?&vq=hd1080&autoplay=1&modestbranding=0&rel=0&loop=1&playlist=` +
              url?.key
            }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share,fullscreen"
          ></iframe>
        </div>
      ) : (
        <h1 className="text-white text-3xl md:text-5xl pt-80 px-[38%] md:px-[38%]">
          Loading
        </h1>
      )}
    </>
  );
};

export default Watchtrailer;
