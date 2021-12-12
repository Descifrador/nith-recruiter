import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="card mb-4 shadow-sm">
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
            <span className="badge rounded-pill bg-info">{post.type}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="card-subtitle text-muted">{post.jobTitle}</h6>
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
                  {moment(post.date.interview).format("MMM Do YYYY, h:mm A")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link to={`/post/${post.id}`}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </Link>
            <Link to={`/edit/${post.id}`}>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </Link>
          </div>
          <small className="text-muted">
            Posted {moment(post.date.post).fromNow()} ago by {post.poster}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Post;
