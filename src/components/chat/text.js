import React, { memo, useCallback } from "react";

function Text({ message }) {
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
    <div key={message.text} className="card mb-4" style={style(message)}>
      <div className="card-body">
        <h4 className="card-title white--text">{message.text}</h4>
      </div>
    </div>
  );
}

export default memo(Text);
