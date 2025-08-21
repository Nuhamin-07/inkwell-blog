import React from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../App";
import PostListItem from "./PostListItem";
import ReactMarkdown from "react-markdown";

export default function PostView() {
  const { id } = useParams();
  const { posts } = React.useContext(PostContext);

  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <PostListItem
      id={post.id}
      title={post.title}
      image={post.imageUrl}
      alt={post.title}
      author={post.author}
      date={post.date}
      content={<ReactMarkdown>{post.blogContent}</ReactMarkdown>}
    />
  );
}
