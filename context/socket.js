import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connection = io();
    setSocket(connection);
  }, []);

  socket?.on("connect_error", async (err) => {
    console.log("Error in establishing connection", err);
    await fetch("/api/socket");
  });

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
