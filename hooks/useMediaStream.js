import React, { useEffect, useRef, useState } from "react";

const useMediaStream = () => {
  const [mediaStream, setMediaStream] = useState(null);
  const isStreamSet = useRef(false);

  useEffect(() => {
    if (isStreamSet.current) return;

    (async function initStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        console.log("Setting your stream");
        setMediaStream(stream);
      } catch (err) {
        console.log("Error in media navigator", err);
      }
    })();
  }, []);

  return {
    stream: mediaStream,
  };
};

export default useMediaStream;
