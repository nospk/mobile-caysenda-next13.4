"use client";
import { type FC, useRef } from "react";
import React from "react";
interface Props {
  id: string;
}
const VideoPlayer: FC<Props> = (props) => {
  const linkVideo = `https://caysenda.vn/resources/video/${props.id}.mp4`;
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const handlePlay = () => {
    vidRef.current?.play();
  };
  const handlePause = () => {
    vidRef.current?.pause();
  };
  const handleToggleVideo = () =>
    vidRef.current?.paused ? handlePlay() : handlePause();

  return (
    <>
      <video
        className="relative h-fit w-full flex-1 justify-center"
        autoPlay
        muted
        loop
        ref={vidRef}
        onClick={handleToggleVideo}
      >
        <source src={linkVideo} type="video/mp4" />
      </video>
    </>
  );
};
export default VideoPlayer;
