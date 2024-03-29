import React from "react";
import Offline from "./Offline.jsx";
import Online from "./Online.jsx";

const Status = ({ isOnline, handleStatus }) => {
  if (isOnline) {
    return <Online />;
  }

  return <Offline handleStatus={handleStatus} />;
};

export default Status;