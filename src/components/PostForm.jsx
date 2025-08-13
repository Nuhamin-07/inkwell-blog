import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { PostContext } from "../App";

export default function PostForm() {
  const { posts, setPosts } = useContext(PostContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    imageUrl: "",
    author: "",
    blogContent: "",
  });

  useEffect(() => {
    if (id) {
      const post = posts.find((p) => p.id === id);
      if (post) {
        setFormData({
          title: post.title,
          summary: post.summary,
          imageUrl: post.imageUrl,
          author: post.author,
          blogContent: post.blogContent,
        });
      }
    }
  }, [id, posts]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      const updatedPosts = posts.map((p) =>
        p.id === id ? { ...p, ...formData } : p
      );
      setPosts(updatedPosts);
    } else {
      const newPost = {
        id: uuidv4(),
        ...formData,
        date: new Date().toLocaleDateString(),
      };
      setPosts([...posts, newPost]);
    }

    navigate("/");
  }

  return (
    <div className="form-container">
      <form id="post-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="form-element"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="summary">Summary</label>
        <input
          className="form-element"
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image-url">Image URL</label>
        <input
          className="form-element"
          id="image-url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <label htmlFor="author">Author</label>
        <input
          className="form-element"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />

        <label htmlFor="blog-content">Blog Content</label>
        <textarea
          className="form-element text-area"
          id="blog-content"
          name="blogContent"
          value={formData.blogContent}
          onChange={handleChange}
          rows={4}
        />

        <button className="form-element" id="form-button" type="submit">
          {id ? "Update Post" : "Add Post"}
        </button>
      </form>
    </div>
  );
}
