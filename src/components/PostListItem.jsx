import React from "react";
import { Link } from "react-router-dom";

export default function PostListItem(props) {
  function getInitials(name) {
    if (!name) return "IW";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  // Calculate read time based on word count
  const wordCount = props.rawContent ? props.rawContent.trim().split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const defaultHeroImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="post-view-container">
      {/* Top Toolbar Navigation */}
      <div className="post-view-toolbar">
        <Link to="/" className="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>All Articles</span>
        </Link>

        <div className="view-toolbar-actions">
          <Link to={`/edit-post/${props.id}`} className="btn btn-secondary btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <span>Edit</span>
          </Link>
          {props.onDelete && (
            <button onClick={props.onDelete} className="btn btn-danger-outline btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>Delete</span>
            </button>
          )}
        </div>
      </div>

      {/* Article Header & Metadata */}
      <article className="article-main">
        <header className="article-header">
          <div className="article-badge-row">
            <span className="post-card-category">Engineering Article</span>
            <span className="read-time-tag">⏱️ {readTime} min read</span>
          </div>

          <h1 className="article-title">{props.title}</h1>

          {/* Author Details Card */}
          <div className="article-author-card">
            <div className="avatar-circle avatar-lg">
              {getInitials(props.author)}
            </div>
            <div className="author-details-column">
              <span className="author-name-lg">{props.author || "Anonymous"}</span>
              <span className="author-meta-sub">Published on {props.date || "Recent"}</span>
            </div>
          </div>
        </header>

        {/* Hero Featured Cover Image */}
        {props.image && (
          <div className="article-hero-image-wrapper">
            <img
              src={props.image || defaultHeroImage}
              alt={props.alt || props.title}
              className="view-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultHeroImage;
              }}
            />
          </div>
        )}

        {/* Article Summary Lead Box */}
        {props.summary && (
          <div className="article-summary-lead">
            <p>{props.summary}</p>
          </div>
        )}

        {/* Article Markdown Content Body */}
        <div className="article-content-body">
          {props.content}
        </div>

        {/* Bottom Author & Share Section */}
        <footer className="article-footer-section">
          <div className="author-bio-box">
            <div className="avatar-circle avatar-lg">
              {getInitials(props.author)}
            </div>
            <div className="author-bio-info">
              <h3>Written by {props.author || "Anonymous"}</h3>
              <p>Thank you for reading! Stay tuned for more insights and updates on engineering and design.</p>
            </div>
          </div>

          <div className="footer-nav-buttons">
            <Link to="/" className="btn btn-secondary">
              ← Back to All Articles
            </Link>
            <Link to={`/edit-post/${props.id}`} className="btn btn-primary">
              Edit Article
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}

