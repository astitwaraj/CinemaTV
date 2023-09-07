import { useSelector } from "react-redux";
import useTrailerVideo from "../useHooks/useTrailerVideo";
import { DISPLAY_VID } from "../utils/srcLinks";

const Videobg = ({ id }) => {
  useTrailerVideo(id);
  const displayKey = useSelector((store) => store.movies?.trailerVideo);
  if (displayKey === null) return;
  const { key } = displayKey;
  return (
    <>
      <div>
        <iframe
          className="w-screen absolute -z-10 aspect-video "
          title="CinemaTV"
          src={
            DISPLAY_VID +
            key +
            `?&vq=hd1080&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=0&rel=0&loop=1`
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Videobg;
