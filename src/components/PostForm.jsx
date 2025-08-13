import React from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { PostContext } from "../App";

export default function PostForm() {
  const { posts, setPosts } = React.useContext(PostContext);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newPost = {
      id: uuidv4(),
      title: formData.get("title"),
      summary: formData.get("summary"),
      imageUrl: formData.get("image-url"),
      author: formData.get("author"),
      blogContent: formData.get("blog-content"),
      date: new Date().toLocaleDateString(),
    };

    setPosts([...posts, newPost]);

    form.reset();
  }

  return (
    <div className="form-container">
      <form id="post-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input className="form-element" id="title" name="title" />
        <br />
        <label htmlFor="summary">Summary</label>
        <input className="form-element" id="summary" name="summary" />
        <br />
        <label htmlFor="image-url">Image URL</label>
        <input className="form-element" id="image-url" name="image-url" />
        <br />
        <label htmlFor="author">Author</label>
        <input className="form-element" id="author" name="author" />
        <br />
        <label htmlFor="blog-content">Blog Content</label>
        <textarea
          className="form-element text-area"
          id="blog-content"
          rows={4}
          name="blog-content"
        ></textarea>
        <input className="form-element" id="form-button" type="submit" />
      </form>
    </div>
  );
}
