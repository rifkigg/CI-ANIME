"use client";
import { truncate } from "fs";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import YouTube from "react-youtube";

const VideoPlayer = ({ YoutubeId }: any) => {
  const [Open, SetOpen] = useState(true);

  const handleButton = () => {
    SetOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Video = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button
          onClick={handleButton}
          className="text-primary z-10 text-2xl bg-secondary float-right px-3 mb-1"
        >
          <IoCloseCircleOutline />
        </button>
        <YouTube
          videoId={YoutubeId}
          onReady={(event: any) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const Button = () => {
    return (
      <button onClick={handleButton} className="fixed bottom-3 right-3 w-32 h-10 bg-primary text-dark">
        Watch Trailer
      </button>
    );
  };

  return Open ? <Video /> : <Button />;
};

export default VideoPlayer;
