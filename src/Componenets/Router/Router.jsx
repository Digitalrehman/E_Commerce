import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Account from "../Pages/Account";
import Item from "../Pages/Item";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Menu from "../MenuItem/Menu";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Item" element={<Item />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </>
  );
};

export default Router;
