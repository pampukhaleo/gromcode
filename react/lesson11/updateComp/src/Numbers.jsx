import React from "react";

const Numbers = ({ number, title }) => {
  return (
    <div className="number">
      <span className="number__title">{title}</span>
      <span className="number__value">{number}</span>
    </div>
  )
}

export default Numbers;