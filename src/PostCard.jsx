import React, { useState } from "react";

function PostCard({ post }) {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => setLikes(likes + 1);

  const handleComment = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src={post.profilePic}
          alt={post.user}
          className="profile-pic"
        />
        <div>
          <h3 className="user-name">{post.user}</h3>
          <p className="post-time">{post.time}</p>
        </div>
      </div>

      <p className="caption">{post.caption}</p>

      <img src={post.image} alt="post" className="post-image" />

      <div className="post-actions">
        <button className="like-btn" onClick={handleLike}>
          👍 Like ({likes})
        </button>
        <button className="comment-btn">💬 Comment</button>
      </div>

      <div className="comment-section">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="send-btn" onClick={handleComment}>
          ➤
        </button>
      </div>

      <div className="comment-list">
        {comments.map((c, i) => (
          <p key={i} className="comment-text">
            {c}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
