import React from "react";

const Spinner = (props) => {

  const styles = {
    display: 'inline-block',
    border: `${props.size}px solid #ccc`,
    borderLeftColor: 'transparent',
    animation: 'spin .5s infinite linear',
    borderRadius: '50%',
  }

  return (
    <span style={styles} className="spinner"></span>
  )
}

export default Spinner;