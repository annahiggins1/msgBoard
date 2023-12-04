import React from "react";
import { supabase } from "./supabase";
import "./AddPost.css";

export default function AddPost( {messageContents, setMessage } ) {
    return (
        <div>
            <textarea className= "add-post-container"
                //type="textarea"
                value={messageContents}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button 
                className="add-post-button" 
                onClick={() => addMsg(messageContents, setMessage)}>Post!
            </button>
        </div>
    );
}

async function addMsg(message, setMessage) {
    if (message.length > 128 || message.length == 0) {
        alert("Message must be less than 128 characters");
        return;
    } 

    try {
        const { data, error } = await supabase
        .from('Messages')
        .insert([
            { message: message },
        ])
        .single();
        if (error) throw error;
        setMessage("");
        window.location.reload();
    }
    catch (error) {
        console.log("Error: ", error);
         alert(error); 
    }
}