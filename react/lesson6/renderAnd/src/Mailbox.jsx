import React from "react";

const Mailbox = ({ unreadMessages }) => {
  let messageCount = unreadMessages.length > 0 && (<div className='mailbox__count'>{unreadMessages.length}</div>)

  return (
    <div className='mailbox__text'>Messages {messageCount}</div>
  )
}

export default Mailbox;