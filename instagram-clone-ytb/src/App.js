import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import {db, auth} from "./firebase";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImageUpload from "./ImageUpload";

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
  const [openSignIn, setOpenSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null); 

  useEffect(() => {
    //listenner,  des qu'il y a un changement du login, cela run direct
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //user had logged in...
        console.log(authUser.displayName);
        setUser(authUser)

      } else {
        //user has logged out
        setUser(null)
      }
    })

    return () => {
      //si useEffect fire encore, il faut faire du cleanup avant de lancer un nouveau useEffect
      //Donc il va détacher les listenners et le lancer à nouveau
      unsubscribe()
    }
  }, [user, username])

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

  const signUp = (event) => {
    event.preventDefault();

    //data from the state
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(user)
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message))
  }

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
    
      setOpenSignIn(false);
  }

  return (
    //BEM convention
    <div className="app">

      {user?.displayName ? (
        <ImageUpload username={user.displayName}/>
      ): (
        <h3>Sorry you need to login to upload</h3>
      )}
      

        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
              <center>
                <img className="app__headerImage" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg" alt="/"/>
              </center>
              <Input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
              <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
              <Button type="submit" onClick={signUp}>SignUp</Button>
            </form>
          </div>
      </Modal>
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
          <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
              <center>
                <img className="app__headerImage" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg" alt="/"/>
              </center>
              <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
              <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
              <Button type="submit" onClick={signIn}>SignIn</Button>
            </form>
          </div>
      </Modal>
      <div className="app__header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg" alt=""/>
      </div>
      {user ? (<Button onClick={() => auth.signOut()}>Logout</Button> ) : 
              ( <div className="app__loginContainer">
                  <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                  <Button onClick={() => setOpen(true)}>Sign Up</Button>
                </div>)}
      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
