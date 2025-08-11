import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../App";
import PostListItem from "./PostListItem";

export default function PostView() {
  const viewPost = useContext(PostContext);
  const { id } = useParams();

  const post = viewPost.find((p) => p.id === id);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <PostListItem
      id={post.id}
      title={post.title}
      content={post.blogContent}
      image={post.imageUrl}
      author={post.author}
      date={post.date}
    />
  );
}
