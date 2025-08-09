import React from "react";
import { TextField, Button } from "@mui/material";

export default function PostForm() {
  const [dataArray, setDataArray] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newData = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      imageUrl: formData.get("image-url"),
      author: formData.get("author"),
      blogContent: formData.get("blog-content"),
    };

    const updatedArray = [...dataArray, newData];
    setDataArray(updatedArray);
    form.reset();

    localStorage.setItem("post", JSON.stringify(updatedArray));
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
