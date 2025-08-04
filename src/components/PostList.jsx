import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../App";

export default function PostList() {
  const listContext = useContext(PostContext);
  const newArr = listContext.map((item) => {
    return (
      <div className="post-container" key={item.id}>
        <div className="inner-container">
          <Link to={`/post/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
          <p>{item.summary}</p>
          <div className="info-container">
            <p>
              <b>{item.author}</b>
            </p>
            <p>{item.date}</p>
            <Link to={`/post/${item.id}`}>See More</Link>
          </div>
        </div>
        <div className="img-container">
          <img src={item.image} alt={item.alt} />
        </div>
      </div>
    );
  });

  return newArr;
}
