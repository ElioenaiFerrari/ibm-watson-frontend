import React, { memo } from "react";
import { Options, Text } from "../";

function Chat({ messages, onKeyDown, message, onChangeMessage }) {
  function renderComponent(message) {
    switch (message.response_type) {
      case "text":
        return <Text message={message} />;
      case "option":
        return <Options options={message.options} />;
      default:
        return <h5>Watson not working...</h5>;
    }
  }
  return (
    <div className="card">
      <div className="card-header">Chat</div>
      <div className="card-body d-flex flex-column list-group p-4">
        {messages.map((message) => (
          <div
            className={
              message.isMe ? "d-flex flex-row" : "d-flex flex-row-reverse"
            }
          >
            {renderComponent(message)}
          </div>
        ))}
      </div>
      <div className="card-footer text-muted">
        <div className="form-group">
          <label htmlFor="message">Digite sua mensagem aqui</label>
          <input
            id="message"
            type="text"
            className="form-control"
            aria-describedby="helpId"
            value={message}
            onKeyDown={onKeyDown}
            onChange={onChangeMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Chat);
