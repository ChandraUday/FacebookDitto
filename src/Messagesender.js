import { Avatar, IconButton, Modal } from '@mui/material'
import React, { useState } from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import "./css/messageSender.css";
import CloseIcon from '@mui/icons-material/Close';
import { useStateValue } from './StateProvider';
import { db, storage } from './firebase';
import firebase from 'firebase';

function Messagesender() {

   const [{user},dispatch]=useStateValue();
   const [open,setOpen]=useState(false);
   const [image,setImage]=useState("");
   const [message,setMessage]=useState(""); 
   const [progress,setProgress]=useState(0);

   const handleClose=()=>{
      setOpen(false)
   }

   const uploadFilewithClick=()=>{
          document.getElementById("imageFile").click();
   }

   const handleChange=(e)=>{
        if(e.target.files[0])
        {
         setImage(e.target.files[0]);
        }
   }

   const handleUpload=(e)=>{
      e.preventDefault();
      if(image===""){
         db.collection("posts").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:message,
            username:user.displayName,
            photoURL:user.photoURL
         })
      }
      else{
         const uploadTask=storage.ref(`images/${image.name}`).put(image);

         uploadTask.on(
            "state_changed",
            (snapshot)=>{
            const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            setProgress(progress);
            },
            (error)=>{
               console.log(error);
               alert(error.message);
            },
            ()=>{
               storage.ref("images").child(image.name).getDownloadURL().then(url=>{
                  db.collection("posts").add({
                     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                     message:message,
                     username:user.displayName,
                     photoURL:user.photoURL,
                     image:url
                  }) 
               })
            }
         )

      }
      handleClose();
      setMessage("");
      setImage(null);
      setProgress(0);
   }

   const handleOpen=()=>{
      setOpen(true)
   }
  return (
   <>
    <Modal open={open} onClose={handleClose}>
           <div className='modal_pop'>
                <form>
                     <div className='modal_heading'>
                          <h3>Create Post</h3>
                          <IconButton onClick={handleClose}>
                             <CloseIcon/>
                          </IconButton>
                     </div>

                     <div className='modalHeader_top'>
                        <Avatar src={user.photoURL}/>
                        <h5>{user.displayName}</h5>
                     </div>

                     <div className='modal_body'>
                          <textarea rows="5" placeholder="Whats on your mind" onChange={e=>setMessage(e.target.value)}>{message}</textarea>
                     </div>

                     <div className='modalFooter'>
                           <div className='modalFooter_Left'>
                                 <h4>Add to your post</h4>
                           </div>
                           <div className='modalFooter_right'>
                              <IconButton>
                              <VideoCallIcon style={{color:'red'}} fontSize="large"/>
                              </IconButton>

                              <IconButton onClick={uploadFilewithClick}>
                              <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize="large"/>
                              </IconButton>

                              <input type="file" id="imageFile" onChange={handleChange} style={{display:"none"}}/>

                              <IconButton>
                              <InsertEmoticonIcon style={{color:'#ffb100'}} fontSize="large"/>
                              </IconButton>
                           </div>
                     </div>
                
                {image!=="" &&  <h2 className='imagepoststyle'>Image is added and will be displayed after click on post</h2>}
{
   progress!="" && <progress value={progress} max="100" style={{"width":"100%","marginBottom":"20px"}}/>
}
                  

                     <input type="submit" onClick={handleUpload} className='post_submit' value="POST"/>
                </form>
           </div>
    </Modal>
    <div className='messagesender'>
           <div className='messagesender_top'>
              <Avatar src={user.photoURL}/>
              <form>
                <input type="text" placeholder="Whats on your mind" onClick={handleOpen}/>
              </form>
           </div>

           <div className='messagesender_bottom'>
                 <div className='messengerOptions'>
                    <VideoCallIcon style={{color:'red'}} fontSize='large'/>
                    <p>Live Video</p>
                 </div>

                 <div className='messengerOptions'>
                    <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize='large'/>
                    <p>Photo/Video</p>
                 </div>

                 <div className='messengerOptions'>
                    <InsertEmoticonIcon style={{color:'#ffb100'}} fontSize='large'/>
                    <p>Feeling/Activity</p>
                 </div>
           </div>
    </div>
    </>
  )
}

export default Messagesender
