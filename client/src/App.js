import './App.css';
import io from 'socket.io-client';
import { useState } from "react";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import Chat from './Chat'

// const cookies = new Cookies();
const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [isAuth, setIsAuth] = useState(false); 

  // if(!isAuth) {
  //   return (
  //     // <div>
  //     //   <Auth />
  //     // </div>
  //   );
  // }

    const joinRoom = ()=> {
    if(username !== "" && room !== ""){
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {isAuth ? (
        <div>
          {showChat ? (
            <Chat socket={socket} username={username} room={room} />
          ) : (
            <div className="joinChatContainer">
              <h3>ChatMate</h3>
              <p>ChatMate an app to chat on</p>
              <input
                type="text"
                placeholder="Enter your name..."
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Room ID..."
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
              <button onClick={joinRoom}>Join A Room</button>
            </div>
          )}
        </div>
      ) : (
        <div className='login'>
          <Auth setIsAuth={setIsAuth} />
        </div>
      )}
    </div>
  );
  
}

export default App;
