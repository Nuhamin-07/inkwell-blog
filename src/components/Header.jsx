import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <h1 className="main-header">InkWell</h1>
        </Link>
        <Link to="new-post" className="new-post-link">
          Add New
        </Link>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
