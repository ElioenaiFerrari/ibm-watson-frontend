import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveMessage } from "../../actions/chat";
import { Chat } from "../../components";
import { chatRepository } from "../../repositories";

function Home() {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  const [message, SetMessage] = useState("");

  const dispatchMessage = (isMe) => {
    dispatch(
      saveMessage({
        text: message,
        isMe,
      })
    );
    SetMessage("");
  };

  const requestWatson = async () => {
    const response = await chatRepository.sendMessage(message);

    console.log(response);
  };

  const onKeyDown = ({ key }) => {
    if (key === "Enter") {
      dispatchMessage(true);
      requestWatson();
    }
  };

  const onChangeMessage = useCallback(({ target }) => {
    SetMessage(target.value);
  }, []);

  return (
    <Chat
      onChangeMessage={onChangeMessage}
      onKeyDown={onKeyDown}
      messages={chat.messages}
      message={message}
    />
  );
}

export default Home;
