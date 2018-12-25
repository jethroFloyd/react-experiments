import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatarSource} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date"> Today at 1:00 pm </span>
        </div>
        <div className="text">Nice Blog Post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
