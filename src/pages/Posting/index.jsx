import React from "react";
import moment from "moment";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Posting = () => {
  let { id } = useParams();
  const [post,setPost] = useState()

  useEffect(()=>{
    (async()=>{
      const db = getFirestore()
      let snap = await getDoc(doc(db,'posts',id));
      setPost(snap.data())
    })()
  },[])

  console.log(id);
  if(!post) return null;

  return (
    <div className="container my-5">
            <div className="card mb-4" key={post.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title">{post.company}</h4>
                  <div>
                    <span
                      className={
                        "badge rounded-pill " +
                        (post.isClosed ? "bg-danger" : "bg-success")
                      }
                    >
                      {post.isClosed ? "Closed" : "Open"}
                    </span>
                    <span className="badge rounded-pill bg-info">
                      {post.type}
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="card-subtitle text-muted">
                      {post.jobTitle}
                    </h6>
                  </div>
                  <div>
                    <h6 className="card-subtitle text-muted">
                      {post.salary} {post.unit} - {post.location.city},{" "}
                      {post.location.country}
                    </h6>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm">
                    <h7 className="mb-2">Eligiblity</h7>
                    <br />
                    <strong>Branches: </strong>
                    {post.eligibility.branches.join(", ")}
                    <br />
                    <strong>CGPA: </strong>
                    {">= " + post.eligibility.cgpa}
                    <br />
                    <strong>Graduation Year: </strong>
                    {/* {post.eligibility.graduationYear.join(", ")} */}
                    {post.eligibility.graduationYear}
                    <br />
                  </div>
                  <div className="col-sm">
                    <h7 className="mb-2">Important Dates</h7>
                    <div className="alert alert-secondary">
                      <ul>
                        <li>
                          <strong>PPT:</strong>{" "}
                          {moment(post.date.ppt).format("MMM Do YYYY, h:mm A")}
                        </li>
                        <li>
                          <strong>Test:</strong>{" "}
                          {moment(post.date.test).format("MMM Do YYYY, h:mm A")}
                        </li>
                        <li>
                          <strong>Interview:</strong>{" "}
                          {moment(post.date.interview).format(
                            "MMM Do YYYY, h:mm A"
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    Posted {moment(post.date.post).fromNow()} ago by{" "}
                    {post.poster}
                  </small>
                </div>
                <a href={post.postId} className="stretched-link"></a>
              </div>
            </div>
        
    </div>
  );
};

export default Posting;
