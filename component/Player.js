import React from "react";
// import ReactPlayer from "react-player";
import ReactPlayer from 'react-player/lazy'

const Player = (props) => {
  const { url, muted, playing } = props;

  return (
    <>
      <ReactPlayer url={url} muted={muted} playing={playing} />
    </>
  );
};

export default Player;
