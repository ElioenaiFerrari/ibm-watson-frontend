import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveMessage } from "../../actions/chat";
import { Chat } from "../../components";
import { chatRepository } from "../../repositories";

function Home() {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);
  const [message, SetMessage] = useState("");

  const dispatchMessage = (message, isMe) => {
    console.log(message);

    dispatch(
      saveMessage({
        ...message,
        isMe,
      })
    );
    SetMessage("");
  };

  const requestWatson = async () => {
    try {
      const params = {
        text: message,
      };

      const data = await chatRepository.sendMessage(params);

      dispatchMessage(data[0], false);
    } catch (error) {
      console.log(error);
    }
  };

  const onKeyDown = ({ key }) => {
    if (key === "Enter") {
      const data = {
        text: message,
        response_type: "text",
      };

      dispatchMessage(data, true);
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
