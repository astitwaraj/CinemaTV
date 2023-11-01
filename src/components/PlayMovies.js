import React from "react";

const PlayMovies = () => {
  return (
    <div className="pt-44 md:pt-0">
      <iframe
        className="aspect-video w-screen"
        src="https://www.youtube.com/embed/gTvc-lEQ5qA?si=z3L7q97bL_uYgj6G?&vq=hd1080&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=gTvc-lEQ5qA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      {/* <video controls width="100%" autoPlay muted loop>
        <source src={PLAY_MOVIE} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video> */}
    </div>
  );
};

export default PlayMovies;
