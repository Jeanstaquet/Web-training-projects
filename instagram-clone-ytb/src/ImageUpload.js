import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import { storage, db} from "./firebase";
import firebase from "firebase";
import "./ImageUpload.css";

function ImageUpload({username}) {
    const [caption, setCaption] = useState("");
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
    
        //listenner, on StateChg, give me a snapshot
        //Garder le track de l'uploading, garder des snapshot du progrès
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function ...
                //Donne un nombre entre 0 et 100
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            (error) => {
                //Error function
                console.log(error);
                alert(error.message)
            },
            () => {
                //Complete function
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        //post image inside db à la place de le
                        //faire manuellement
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        });

                        setProgress(0);
                        setCaption("")
                        setImage(null);
                    })
            }
        )
    }

    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100"/>
            <input type="text" placeholder="Enter a caption..." value={caption} onChange={event => setCaption(event.target.value)}/>
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    );
}

export default ImageUpload;