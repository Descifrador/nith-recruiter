import React from "react";
import { posts } from "../../constants/config";
import Post from "../../components/Post";

const ListPosting = () => {
  return (
    <div className="container my-5">
      <div className="row"></div>
      {posts.map((post, index) => {
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
