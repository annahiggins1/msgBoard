import React, { useState, useEffect } from 'react';
import "./App.css";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import ThemeButton from "./components/ThemeButton";
import { supabase } from './supabase';

function App() {
  const [msgs, setMsgs] = useState([]);
  const [msg, setMsg] = useState("");
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    getMsgs();
  }, []);


  async function getMsgs() {
    try {
      const { data, error } = await supabase
        .from('Messages')
        .select('*');
      if (error) throw error;
      console.log("Data: ", data);
      if (data != null) {
        setMsgs(data);
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="app-container" data-theme={theme}>
      <h1 className="header">Message Board</h1>
      <div className="centered-container">
        <ThemeButton setTheme={setTheme}/>
      </div>
      <div className="centered-container">
        <AddPost
          messageContents={msg}
          setMessage={setMsg}
        />
      </div>
      <div className="centered-container">
        <Posts
          messages={msgs}
        />
      </div>
    </div>
  );
}

export default App;