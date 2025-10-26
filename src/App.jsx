import React from "react";
import PostCard from "./PostCard.jsx";
import "./App.css";

function App() {
  const posts = [
    {
      id: 1,
      user: "John Lineras",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      time: "2 hours ago",
      caption: "Beautiful day at the beach! 🌊☀️",
      image: "https://picsum.photos/500/300?random=1",
    },
    {
      id: 2,
      user: "Sarah Lee",
      profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
      time: "5 hours ago",
      caption: "Coffee and coding — perfect combo ☕💻",
      image: "https://picsum.photos/500/300?random=2",
    },
    {
      id: 3,
      user: "Michael Brown",
      profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
      time: "1 day ago",
      caption: "Just finished a 10K run! 🏃‍♂️🔥",
      image: "https://picsum.photos/500/300?random=3",
    },
    {
      id: 4,
      user: "Emma Watson",
      profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
      time: "2 days ago",
      caption: "Reading under the stars ✨📚",
      image: "https://picsum.photos/500/300?random=4",
    },
  ];

  return (
    <div className="app">
      <div className="feed-container">
        <h1 className="feed-title">Social Media Feed</h1>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
