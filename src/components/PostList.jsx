import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../App";

export default function PostList() {
  const { posts, setPosts, searchQuery, setSearchQuery } = useContext(PostContext);

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      const updatedPosts = posts.filter((p) => p.id !== id);
      setPosts(updatedPosts);
    }
  }

  // Filter posts based on search query
  const filteredPosts = posts ? posts.filter((post) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      (post.title && post.title.toLowerCase().includes(q)) ||
      (post.summary && post.summary.toLowerCase().includes(q)) ||
      (post.author && post.author.toLowerCase().includes(q)) ||
      (post.blogContent && post.blogContent.toLowerCase().includes(q))
    );
  }) : [];

  // Helper for author initials avatar
  function getInitials(name) {
    if (!name) return "IW";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  // Default image if missing or invalid
  const defaultCardImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="posts-page-container">
      {/* Hero Header Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-badge">✨ InkWell Engineering & Design</span>
          <h1 className="hero-title">Ideas, Insights & Technical Stories</h1>
          <p className="hero-description">
            Discover articles on web architecture, UI/UX design, modern React patterns, and product development from our team.
          </p>
        </div>
      </section>

      {/* Filter Stats Bar */}
      <div className="filter-stats-bar">
        <div className="stats-info">
          <span className="stats-count">
            {filteredPosts.length} {filteredPosts.length === 1 ? "Article" : "Articles"}
          </span>
          {searchQuery && (
            <span className="search-active-tag">
              Filtered by: "{searchQuery}"
            </span>
          )}
        </div>
        {searchQuery && (
          <button
            className="btn btn-outline btn-sm"
            onClick={() => setSearchQuery("")}
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Main Content: List or Empty States */}
      {!posts || posts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">✍️</div>
          <h2 className="empty-state-title">No Blog Posts Yet</h2>
          <p className="empty-state-text">
            Start sharing your thoughts, guides, and engineering updates with the world.
          </p>
          <Link to="/new-post" className="btn btn-primary btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Create Your First Post
          </Link>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔎</div>
          <h2 className="empty-state-title">No Matching Articles</h2>
          <p className="empty-state-text">
            We couldn't find any articles matching <strong>"{searchQuery}"</strong>. Try checking for typos or clear your search term.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="btn btn-secondary"
          >
            Clear Search Filter
          </button>
        </div>
      ) : (
        <div className="posts-grid">
          {filteredPosts.map((item) => (
            <article className="post-card" key={item.id}>
              {/* Card Image */}
              <div className="post-card-image-wrapper">
                <Link to={`/post/${item.id}`} tabIndex="-1">
                  <img
                    src={item.imageUrl || defaultCardImage}
                    alt={item.title || "Blog post cover"}
                    className="post-card-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultCardImage;
                    }}
                  />
                </Link>
                <span className="post-card-category">Article</span>
              </div>

              {/* Card Body */}
              <div className="post-card-body">
                <Link to={`/post/${item.id}`} className="post-card-title-link">
                  <h2 className="post-card-title">{item.title || "Untitled Post"}</h2>
                </Link>

                <p className="post-card-summary">
                  {item.summary || (item.blogContent ? item.blogContent.substring(0, 120) + "..." : "No summary provided.")}
                </p>

                {/* Author & Meta Bar */}
                <div className="post-card-meta">
                  <div className="author-info">
                    <div className="avatar-circle">
                      {getInitials(item.author)}
                    </div>
                    <div className="author-details">
                      <span className="author-name">{item.author || "Anonymous"}</span>
                      <span className="post-date">{item.date || "Recently"}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="post-card-footer">
                  <Link to={`/post/${item.id}`} className="read-more-link">
                    <span>Read article</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  <div className="card-action-btns">
                    <Link
                      to={`/edit-post/${item.id}`}
                      className="btn-icon btn-icon-secondary"
                      title="Edit article"
                      aria-label="Edit article"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn-icon btn-icon-danger"
                      title="Delete article"
                      aria-label="Delete article"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

