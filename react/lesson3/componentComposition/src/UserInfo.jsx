import React from "react";
import "./userInfo.scss";
import Avatar from "./Avatar.jsx";

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar name={props.author.name} avatarUrl={props.author.avatarUrl} />
      <div className="user-info__name">{props.author.name}</div>
    </div>
  );
}

export default UserInfo;
