import React, { memo } from "react";
import "./styles.css";

function Options({ options, onClick }) {
  return (
    <div class="list-group">
      {options.map((option) => (
        <button
          onClick={onClick}
          type="button"
          class="option list-group-item list-group-item-action active"
          key={option.label}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default memo(Options);
