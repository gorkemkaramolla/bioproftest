import React, { useState, useRef, useEffect } from "react";

type Props = {};

const Video: React.FC<Props> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 2; // set the starting time to 5 seconds

      videoRef.current.addEventListener("ended", handleEnded);
      videoRef.current.addEventListener("click", handleClick);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleEnded);
        videoRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  const handleClick = () => {
    if (!playing) {
      handlePlay();
    } else {
      handlePause();
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleEnded = () => {
    if (playing) {
      setPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="object-contain w-full h-full"
        controls={false}
      >
        <source src="pişik kremi video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!playing && (
        <button
          className="absolute z-30 bg-red w-24 m-0 p-0 h-24"
          onClick={handlePlay}
        >
          <img src="play.png" alt="" />
        </button>
      )}
    </div>
  );
};

export default Video;
