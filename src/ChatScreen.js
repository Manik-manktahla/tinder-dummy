import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

const ChatScreen = (props) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "",
      message: "Hey!! supp 😄",
    },
    {
      name: "Ellen",
      image: "",
      message: "🥰🥰😍",
    },
    {
      image: "",
      message: "Hey!! supp 😄",
    },
    {
      image: "",
      message: "What you doing!!",
    },
    
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        {`YOU MATCHED WITH ${props.name.toUpperCase()} ON 10/08/2020`}
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chat__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="chatScreen__inputButton">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
