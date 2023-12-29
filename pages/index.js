import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { v4 } from "uuid";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = v4();
    router.push(`${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      router.push(`${roomId}`);
    } else {
      alert("Please enter a valid room id.");
    }
  };

  return (
    <>
      <div>
        <p>Welcome</p>
        <input
          value={roomId}
          placeholder="Please enter room id"
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
        <button onClick={createAndJoin}>Create new room</button>
      </div>
    </>
  );
}
