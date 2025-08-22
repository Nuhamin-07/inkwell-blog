import React from "react";
import { Link } from "react-router-dom";

export default function PostListItem(props) {
  return (
    <div className="post-view">
      <img src={props.image} alt={props.alt} className="view-image" />
      <h2>{props.title}</h2>
      <p className="content-p">{props.content}</p>
      <div className="info-container-view">
        <p>
          <b>{props.author}</b>
        </p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
