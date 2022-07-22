import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper">
          <div className="formWrapper">
              <div className="logo-heading">
            <img className="snu_logo" src="https://gyaanarth.com/wp-content/uploads/2021/08/Shiv-Nadar-University-SNU-Greater-Noida.jpg" alt='snu-code-collab' />
            <h1 className="logo-description">SNU CODE COLLAB</h1>
              </div>
            <h4 className="mainLabel">Paste invitation room ID</h4>
            <div className="inputGroup">
            <input
                            type="text"
                            className="inputBox"
                            placeholder="ROOM ID"
                            onChange={(e) => setRoomId(e.target.value)}
                            value={roomId}
                            onKeyUp={handleInputEnter}
                        />
                        <input
                            type="text"
                            className="inputBox"
                            placeholder="USERNAME"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            onKeyUp={handleInputEnter}
                        />
              <button className="btn joinBtn" onClick={joinRoom}>Join</button>
              <span className="createInfo">
                if you dont have an invite then create&nbsp;
                <a onClick={createNewRoom} href="#" className="createNewBtn">new room</a>
              </span>
            </div>
          </div>
          <footer>
              <h4>Built with 🧡 by{' '}<a href="https://github.com/devyansh3" target='_blank'>Devyansh Sehgal</a></h4>
              </footer>
        </div>
      );
    };
    

export default Home;
