import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <h1 className="main-header">InkWell</h1>
        </Link>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
