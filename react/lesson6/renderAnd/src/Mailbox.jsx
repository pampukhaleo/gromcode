import React from "react";

const Mailbox = ({ messages }) => {
  let messageCount = messages.length > 0 && (<div className='mailbox__count'>{messages.length}</div>)

  return (
    <div className='mailbox__text'>Messages {messageCount}</div>

  )
}

export default Mailbox;