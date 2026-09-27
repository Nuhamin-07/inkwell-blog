import React, { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PostContext } from "../App";
import PostListItem from "./PostListItem";
import ReactMarkdown from "react-markdown";

export default function PostView() {
  const { id } = useParams();
  const { posts, setPosts } = useContext(PostContext);
  const navigate = useNavigate();

  const post = posts ? posts.find((p) => String(p.id) === String(id)) : null;

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      const updatedPosts = posts.filter((p) => String(p.id) !== String(id));
      setPosts(updatedPosts);
      navigate("/");
    }
  }

  if (!post) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📖</div>
        <h2 className="empty-state-title">Article Not Found</h2>
        <p className="empty-state-text">
          The article you are looking for does not exist or may have been removed.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to All Articles
        </Link>
      </div>
    );
  }

  return (
    <PostListItem
      id={post.id}
      title={post.title}
      summary={post.summary}
      image={post.imageUrl}
      alt={post.title}
      author={post.author}
      date={post.date}
      rawContent={post.blogContent}
      content={<ReactMarkdown>{post.blogContent || ""}</ReactMarkdown>}
      onDelete={handleDelete}
    />
  );
}

