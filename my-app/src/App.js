import React, { useState, useEffect } from 'react';
import "./App.css";
import Posts from "./Posts";
import AddPost from "./AddPost";
import { supabase } from './supabase';

function App() {
  const [msgs, setMsgs] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getMsgs();
  }, []);



  // gets messages from the database
  async function getMsgs() {
    try {
      const { data, error } = await supabase
        .from('Messages') // getting data from the messages table
        .select('*'); // taking all the data from the table
      if (error) throw error;
      console.log("Data: ", data);
      if (data != null) {
        setMsgs(data);
      }
    } catch (error) {
      alert(error); // alerts the window if there's an error
    }
  }

  return (
    <div className="app-container">
      <div className="centered-container">
        <AddPost // displays the posting box
          messageContents={msg}
          setMessage={setMsg}
        />
      </div>
      <div className="centered-container">
        <Posts // displays post history
          messages={msgs}
          getMessages={getMsgs}
        />
      </div>
    </div>
  );
}

export default App;