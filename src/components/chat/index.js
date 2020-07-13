import React, { memo, useCallback } from "react";
import { Options } from "..";

function Chat({ messages, onKeyDown, message, onChangeMessage }) {
  const style = useCallback(({ isMe }) => {
    if (isMe) {
      return {
        width: "200px",
        backgroundColor: "#7159c1",
        color: "white",
        float: "left",
      };
    }
    return {
      width: "200px",
      backgroundColor: "lightblue",
      color: "white",
      float: "right",
    };
  }, []);

  return (
    <div className="card">
      <div className="card-header">Chat</div>
      <div className="card-body list-group p-4">
        {messages.map((message) =>
          message.text && message.response_type === "text" ? (
            <div
              key={message.text}
              className="card mb-4"
              style={style(message)}
            >
              <div className="card-body">
                <h4 className="card-title white--text">{message.text}</h4>
              </div>
            </div>
          ) : (
            <Options options={message.options} />
          )
        )}
      </div>
      <div className="card-footer text-muted">
        <div className="form-group">
          <label for="">Digite sua mensagem aqui</label>
          <input
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
