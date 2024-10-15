import React from "react";

function Card({ title, value, description, color }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: color,
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
