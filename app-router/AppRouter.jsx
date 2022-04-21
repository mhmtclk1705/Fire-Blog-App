import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Details from "../pages/Details";
import UpdateBlog from "../pages/UpdateBlog";
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<Dashboard />} />
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/new-blog" element={<NewBlog/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/update" element={<UpdateBlog/>} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
