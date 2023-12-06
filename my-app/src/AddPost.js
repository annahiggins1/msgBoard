import React from "react";
import { supabase } from "./supabase";
import "./AddPost.css";

export default function AddPost({ messageContents, setMessage }) {
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <textarea
        className="add-post-container"
        value={messageContents}
        onChange={handleMessageChange}
      />
      <div className={`message-length ${messageContents.length > 128 ? "error" : ""}`}>
        {messageContents.length}
      </div>
      <button
        className="add-post-button"
        onClick={() => addMsg(messageContents, setMessage)}
      >
        Post!
      </button>
    </div>
  );
}

async function addMsg(message, setMessage) {
  if (message.length > 128) {
    alert("Message must be less than 128 characters");
    return;
  }
  else if (message.length === 0) {
    alert("Message must have at least 1 character");
    return;
}

  try {
    const { data, error } = await supabase
      .from("Messages")
      .insert([{ message: message }])
      .single();
    if (error) throw error;
    setMessage("");
    window.location.reload();
  } catch (error) {
    console.log("Error: ", error);
    alert(error);
  }
}