import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { PostContext } from "../App";
import { DEFAULT_PLACEHOLDER_IMAGE, handleImageError } from "../utils/imageUtils";

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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const post = posts.find((p) => String(p.id) === String(id));
      if (post) {
        setFormData({
          title: post.title || "",
          summary: post.summary || "",
          imageUrl: post.imageUrl || "",
          author: post.author || "",
          blogContent: post.blogContent || "",
        });
      }
    }
  }, [id, posts]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Article title is required.";
    if (!formData.author.trim()) newErrors.author = "Author name is required.";
    if (!formData.blogContent.trim()) newErrors.blogContent = "Blog content cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    if (id) {
      const updatedPosts = posts.map((p) =>
        String(p.id) === String(id) ? { ...p, ...formData } : p
      );
      setPosts(updatedPosts);
    } else {
      const newPost = {
        id: uuidv4(),
        ...formData,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
      };
      setPosts([...posts, newPost]);
    }

    navigate("/");
  }

  return (
    <div className="form-page-container">
      {/* Navigation Top Header */}
      <div className="form-top-nav">
        <Link to="/" className="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Form Card */}
      <div className="form-card">
        <div className="form-card-header">
          <h1 className="form-card-title">{id ? "Edit Article" : "Create New Article"}</h1>
          <p className="form-card-subtitle">
            {id ? "Update your existing article details and publish the changes." : "Share your knowledge, ideas, and engineering insights with your readers."}
          </p>
        </div>

        <form id="post-form" onSubmit={handleSubmit} noValidate>
          {/* Article Title */}
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Article Title <span className="required-star">*</span>
            </label>
            <input
              className={`form-input ${errors.title ? "has-error" : ""}`}
              id="title"
              name="title"
              type="text"
              placeholder="e.g. Building Scalable Web Apps with React 19"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <p className="form-error-msg">{errors.title}</p>}
          </div>

          {/* Article Summary */}
          <div className="form-group">
            <label htmlFor="summary" className="form-label">
              Summary / Excerpt
            </label>
            <input
              className="form-input"
              id="summary"
              name="summary"
              type="text"
              placeholder="Short 1-2 sentence overview for card previews..."
              value={formData.summary}
              onChange={handleChange}
            />
          </div>

          {/* Author & Image URL Grid */}
          <div className="form-row">
            <div className="form-group flex-1">
              <label htmlFor="author" className="form-label">
                Author Name <span className="required-star">*</span>
              </label>
              <input
                className={`form-input ${errors.author ? "has-error" : ""}`}
                id="author"
                name="author"
                type="text"
                placeholder="e.g. Sarah Jenkins"
                value={formData.author}
                onChange={handleChange}
              />
              {errors.author && <p className="form-error-msg">{errors.author}</p>}
            </div>

            <div className="form-group flex-1">
              <label htmlFor="image-url" className="form-label">
                Cover Image URL
              </label>
              <input
                className="form-input"
                id="image-url"
                name="imageUrl"
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Image Live Preview */}
          <div className="image-preview-container">
            <span className="preview-label">
              {formData.imageUrl ? "Image Preview" : "Default Cover Preview (Auto-Assigned)"}
            </span>
            <img
              src={formData.imageUrl || DEFAULT_PLACEHOLDER_IMAGE}
              alt="Cover preview"
              className="image-preview-img"
              onError={(e) => handleImageError(e, DEFAULT_PLACEHOLDER_IMAGE)}
            />
          </div>

          {/* Blog Content TextArea */}
          <div className="form-group">
            <div className="label-with-hint">
              <label htmlFor="blog-content" className="form-label">
                Blog Content (Markdown Supported) <span className="required-star">*</span>
              </label>
              <span className="markdown-hint">Supports **bold**, *italics*, # headers, code blocks</span>
            </div>
            <textarea
              className={`form-textarea ${errors.blogContent ? "has-error" : ""}`}
              id="blog-content"
              name="blogContent"
              value={formData.blogContent}
              onChange={handleChange}
              rows={12}
              placeholder="Write your article content using Markdown format..."
            />
            {errors.blogContent && <p className="form-error-msg">{errors.blogContent}</p>}
          </div>

          {/* Form Actions Footer */}
          <div className="form-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              type="submit"
              id="form-button"
              className="btn btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
              <span>{id ? "Save Changes" : "Publish Post"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

