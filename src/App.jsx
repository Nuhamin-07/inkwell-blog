import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostListItem from "./components/PostListItem";
import PostView from "./components/PostView";
import { savePosts, loadPosts } from "./data";

import "./App.css";

const PostContext = createContext();

export default function App() {
  const [posts, setPosts] = React.useState(loadPosts());

  React.useEffect(() => {
    savePosts(posts);
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<PostList />} />
            <Route path="new-post" element={<PostForm />} />
            <Route path="post/:id" element={<PostView />} />
            <Route path="edit-post/:id" element={<PostForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export { PostContext };
