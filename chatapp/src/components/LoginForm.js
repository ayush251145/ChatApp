import React, { useState } from "react";
import axios from "axios";

const projectID = "1fe2fbef-1c80-419d-8944-e559ad165be4";

function LoginForm(props) {

    const [username,setUserName] =useState('');
    const [password,setPassWord] = useState('');
    const [error,setError] =useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = {"Project-ID" : projectID, "User-Name": username,"User-Secret":password};

        try {
            await axios.get("https://api.chatengine.io/chats",{headers: authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password)

            window.location.reload();
            setError("");
        }
        catch(err){
            setError('Oops, incorrect creditionals')
        }
    }

  return (
    <div>
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="input"
              placeholder="username"
              required
            />
             <input
              type="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              className="input"
              placeholder="password"
              required
            />
            <div align="center">
                <button className="button">
                    <span>Start Chatting</span>
                </button>
            </div>
          </form>
          <h1>{error}</h1>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
