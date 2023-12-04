import React from "react";
import "./Posts.css";

export default function Posts({ messages, getMessages }) {
  const sortedMessages = messages.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  function formatTime(time) {
    return new Date(time).toDateString() + ", " + new Date(time).toLocaleTimeString();
  }

  return (
    <div>
      <ul className="message-list">
        {sortedMessages.map((message) => (
          <li key={message.id} className="message-box">
            <p>{message.message}</p>
            <div className="time">{formatTime(message.created_at)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}