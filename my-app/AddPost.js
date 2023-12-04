import React from "react";
import { subabase } from "./subabaseClient";

export function AddPost( {messageContents, setMessage } ) {
    return (
        <div>
            <input
                type="text"
                value={messageContents}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button onClick={() => addMsg(messageContents)}>Post!</button>
        </div>
    );
}

async function addMsg(message) {
    try {
        const { data, error } = await supabase
        .from('Messages')
        .insert([
            { message: message },
        ])
        .single();
        if (error) throw error;
        window.location.reload();
    }
    catch (error) {
        console.log("Error: ", error);
         alert(error); 
      }
}