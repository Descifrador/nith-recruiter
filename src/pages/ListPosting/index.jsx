import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import {doc, getDocs,query, collection, getFirestore} from 'firebase/firestore'

const ListPosting = () => {

  const [posts,setPosts] = useState();

  useEffect(()=>{
    (async ()=>{
      try{
        const db = getFirestore();
        const docSnap = await getDocs(query(collection(db, "posts")));
  
        if(docSnap){
         let data = [];
          docSnap.forEach(doc=>{
           data.push(doc.data())
         }) 
         setPosts(data);
        }
      }catch(err){
        console.log(err);
      }
    })()

  },[])

  return (
    <div className="container my-5">
      <div className="row"></div>
      {posts?.map((post, index) => {
        return (
          <div key={index} className="d-flex justify-content-center">
            <div className="col-md-8 col-sm-12">
              
                <Post post={post} />
           
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPosting;
