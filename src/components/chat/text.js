import React, { memo, useCallback } from "react";

function Text({ message }) {
  const style = useCallback(({ isMe }) => {
    return {
      width: "250px",
      backgroundColor: isMe ? "#7159c1" : "red",
      color: "white",
      float: "left",
      padding: "10px",
    };
  }, []);
  return (
    <div key={message.text} className="card mb-4" style={style(message)}>
      <div className="row card-body">
        <h4 className="card-title white--text">{message.text}</h4>
      </div>
    </div>
  );
}

export default memo(Text);
