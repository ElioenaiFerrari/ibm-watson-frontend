import React, { memo, useCallback } from "react";

function Chat({ messages, onKeyDown, message, onChangeMessage }) {
  const style = useCallback(({ isMe }) => {
    if (isMe) {
      return { backgroundColor: "#7159c1" };
    }
    return { backgroundColor: "lightblue" };
  }, []);

  return (
    <div class="card">
      <div class="card-header">Chat</div>
      <div class="card-body list-group">
        {messages.map((message) => (
          <div class="card mb-4" style={style(message)}>
            <div class="card-body">
              <h4 class="card-title white--text">{message.text}</h4>
            </div>
          </div>
        ))}
      </div>
      <div class="card-footer text-muted">
        <div class="form-group">
          <label for="">Digite sua mensagem aqui</label>
          <input
            type="text"
            class="form-control"
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
