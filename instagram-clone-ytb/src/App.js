import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"cleverqazi", 
      caption:"WOW it works", 
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
    },
    {
      username:"cleverqazi", 
      caption:"WOW it works", 
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
    }
  ])

  return (
    //BEM convention
    <div className="App">
      <div className="app__header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg" alt=""/>
      </div>
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
