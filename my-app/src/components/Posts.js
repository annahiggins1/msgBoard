import React from "react";
import "./Posts.css";

export default function Posts({ messages, getMessages }) {
  //sorts the messages by time
  const sortedMessages = messages.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  //formats the timestamp at the bottom of each post
  function formatTime(time) {
    return new Date(time).toDateString() + ", " + new Date(time).toLocaleTimeString();
  }

  return (
    //list of the messages
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