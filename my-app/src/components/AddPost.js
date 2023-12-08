import React from "react";
import { supabase } from "../supabase";
import "./AddPost.css";
import plane from "../icons/plane.png"

//Renders the top-most add post functionality
export default function AddPost({ messageContents, setMessage }) {
  //Sets the message to the value of the textarea, this is used to display the number of characters  
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <aside>
      <textarea //textarea that allows the user to type in a message 
       className="add-post-container" 
        value={messageContents}
        onChange={handleMessageChange}
      />
      <button //button that adds the post to the message board
        className="add-post-button"
        onClick={() => addMsg(messageContents, setMessage)}
        style={{backgroundImage: `url(${plane})`}}
      >
      </button>
      </aside>
      <div className={`message-length ${messageContents.length > 128 ? "error" : ""}`}> 
        {messageContents.length}
      </div>
    </div>
  );
}

//Adds the message to the database if it fits the requirements of not being longer than 128 characters
//and is not an empty message
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
      //inserts the message
      .insert([{ message: message }])
      .single();
    if (error) throw error;
    //sets the message to empty and reloads the page
    setMessage("");
    window.location.reload();
  } catch (error) {
    console.log("Error: ", error);
    alert(error);
  }
}