import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostView from "./components/PostView";
import { savePosts, loadPosts } from "./data";

import "./App.css";

const PostContext = createContext();

export default function App() {
  const [posts, setPosts] = useState(loadPosts());
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem("inkwell_theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  });

  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("inkwell_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        searchQuery,
        setSearchQuery,
        theme,
        toggleTheme,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<PostList />} />
            <Route path="new-post" element={<PostForm />} />
            <Route path="post/:id" element={<PostView />} />
            <Route path="edit-post/:id" element={<PostForm />} />
            <Route
              path="*"
              element={
                <div className="empty-state">
                  <div className="empty-state-icon">🔍</div>
                  <h2>404 — Page Not Found</h2>
                  <p>The page you are looking for does not exist or has been moved.</p>
                  <Link to="/" className="btn btn-primary">
                    Back to Home
                  </Link>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export { PostContext };

