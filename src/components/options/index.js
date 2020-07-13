import React, { memo } from "react";

function Options({ options, onClick }) {
  return (
    <div className="list-group">
      {options.map((option) => (
        <button
          onClick={onClick}
          type="button"
          className="list-group-item list-group-item-action outline"
          key={option.label}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default memo(Options);
