import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import {db} from "./firebase";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

//1:33:47
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle)
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //nom de la collection
    //Onsnapshot: Si quelqu'un ajoute un n'importe quoi à cette collection, on va runner ce morceau de code:
    db.collection("posts").onSnapshot(snapshot => {
      //Va sur tout les docs re retourne les données
      setPosts(snapshot.docs.map(doc => ({
        //Get all the id
        id: doc.id,
        post: doc.data()})))
    })
  }, [])


  return (
    //BEM convention
    <div className="App">
        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={modalStyle} className={classes.paper}>
          <h2>I am a modal</h2>
          </div>
      </Modal>
      <div className="app__header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg" alt=""/>
      </div>
      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
