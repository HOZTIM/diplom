import React, { useState } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Userfront from "@userfront/toolkit/react";
import { LogoutButton } from "../logout/Logout.tsx";
Userfront.init("demo1234");

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/dashboard">Уроки</Link>
        </li>
        {!Userfront.tokens.accessToken && (
          <li>
            <Link to="/home">Регистрация</Link>
          </li>
        )}
        {!Userfront.tokens.accessToken && (
          <li>
            <Link to="/login">Вход</Link>
          </li>
        )}
        {/* <li>
          <Link to="/home">Регистрация</Link>
        </li>
        <li>
          <Link to="/login">Вход</Link>
        </li> */}
        {/* <li>
                  <Link to="/reset">Забыл пароль</Link>
                </li> */}
        {Userfront.tokens.accessToken && (
          // <li style={{ width: "200px" }}>
          <LogoutButton />
          // </li>
        )}
      </ul>
    </nav>
  );
};
