import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Add from "./pages/add.tsx";
import { FaHome } from "react-icons/fa";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="navbar bg-base-100 justify-between">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <FaHome />
        </Link>
        <Link to={"/add"} className="btn btn-primary text-xl">
          Add
        </Link>
      </div>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/add" Component={Add} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
