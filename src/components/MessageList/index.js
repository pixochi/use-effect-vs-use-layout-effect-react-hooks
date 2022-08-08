import React from "react";

import "./MessageList.css";

const MessageList = React.forwardRef(({ messages }, ref) => {
  return (
    <ul ref={ref} className="message-list">
      <div className="message-list-content">
        {messages.map((message) => (
          <li key={message.id} className="message-list-item">
            {message.value}
          </li>
        ))}
      </div>
    </ul>
  );
});

export default MessageList;
