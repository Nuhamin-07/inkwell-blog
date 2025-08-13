import React from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../App";

export default function PostList() {
  const { posts, setPosts } = React.useContext(PostContext);

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter((p) => p.id !== id);
      setPosts(updatedPosts);
    }
  }

  if (!posts || posts.length === 0) {
    return <h2>No posts yet.</h2>;
  }
  return posts.map((item) => {
    return (
      <div className="post-container" key={item.id}>
        <div className="inner-container">
          <Link to={`/post/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
          <p>{item.summary}</p>
          <div className="info-container">
            <p>
              <b>{item.author}</b>
            </p>
            <p>{item.date}</p>
            <Link to={`/post/${item.id}`}>See More</Link>
          </div>
          <div className="cta-button">
            <Link to={`edit-post/${item.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
        <div className="img-container">
          <img src={item.imageUrl} />
        </div>
      </div>
    );
  });
}
