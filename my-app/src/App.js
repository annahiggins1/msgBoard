import { react } from react;
import { supabase } from './supabaseClient';
import Posts from "../Posts";
import AddPost from "../AddPost";
import { useState } from 'react';

function App() {
    const[msgs, setMsgs] = useState([]);
    const[msg, setMsg] = useState("");

    //gets messages from the database
    async function getMsgs() {
        try {
            const { data, error } = await supabase
            .from('Messages') //getting data from the messages table
            .select('*'); //taking all the data from the table
            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error); // alerts the window if there's an error
        }
    }

    //adds the given message to the database
    async function addMsg(message) {
        //enforces the message to have a length less than 128
        if (length(message) > 128) {
            alert("Message must be less than 128 characters");
            return;
        }

        //tries to insert the message into the database
        try {
            const { data, error } = await supabase
            .from('Messages')
            .insert([
                { message: message },
            ]);
            if (error) throw error;
            window.location.reload();
        } 
        //if fails, alerts window
        catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <div>
                <AddPost //displays the posting box
                msg={msg} 
                setMsg={setMsg}> </AddPost>
            </div>
            <div>
                <Posts //displays post history
                msgs={msgs}> 
                 </Posts>
            </div>
        </div>
    );



}