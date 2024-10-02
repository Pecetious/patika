import React from "react";

function Error({ message }) {
  return (
    <div
      style={{
        padding: 15,
        fontSize: 16,
        color: "red",
        textDecoration: "underline",
        textUnderlineOffset: "5px",
      }}
    >
      Error: {message}
    </div>
  );
}

export default Error;
