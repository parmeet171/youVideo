import React from "react";
import "../index.css";

const Comments = ({ comment }) => {
  return (
    <div className="chatInfo">
      <div className="userChat">
        <img
          src={
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
          alt=""
        />
        <div className="userChatInfo">
          <span>
            {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </span>
          <p>{comment?.snippet?.topLevelComment?.snippet?.textOriginal.slice(0,400)}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
