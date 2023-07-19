import React, { useEffect, useState } from 'react'
import "./css/feed.css"
import Storyreel from './Storyreel'
import Messagesender from './Messagesender'
import Post from './Post'
import { db } from './firebase';


function Feed() {

  const [posts, setPosts]=useState([]);

  useEffect(()=>{
      db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
        setPosts(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data(),
        })))
      })
  },[])

  return (
    
     <div className="feed">
          <Storyreel/>
          <Messagesender/>

          {
            posts.map(post=>{
              return <Post photoURL={post.data.photoURL} image={post.data.image} username={post.data.username} timestamp="12:30 PM" message={post.data.message} />
            })
          }
          
         
    </div>
  )
}

export default Feed
