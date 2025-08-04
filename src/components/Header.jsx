import React from "react";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <h1>InkWell</h1>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
