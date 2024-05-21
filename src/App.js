import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Userfront, {
  SignupForm,
  LoginForm,
  PasswordResetForm,
  LogoutButton,
} from "@userfront/toolkit/react";
import Main from "./components/main/Main.tsx";
// import logo from "../../img/logo.png";
import logo from "./img/logo.png";
import { Navbar } from "./components/navbar/Navbar.tsx";
import Blender from "./components/blender/Blender.tsx";
import Component3dMax from "./components/3dMax/Component3dMax.tsx";
import Maya from "./components/Maya/Maya.tsx";
import Cinema4D from "./components/Cinema4D/Cinema4D.tsx";
import "./App.css";
Userfront.init("demo1234");

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Main />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="auth">
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div className="auth">
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div className="auth">
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  const [playlist, setPlaylist] = useState("blender");

  return (
    <div className="container">
      <div className="logo">
        <div className="logo_content">
          <img src={logo} alt="Logo" className="logo_img" />
          <div className="logo_title">
            Онлайн <br /> курсы
          </div>
        </div>
        <Navbar />
      </div>
      <div className="lessons_category">
        <ul className="lessons_menu">
          <li onClick={() => setPlaylist("blender")}>Blender</li>
          <li onClick={() => setPlaylist("3dmax")}>3dMax</li>
          <li onClick={() => setPlaylist("Maya")}>Maya</li>
          <li onClick={() => setPlaylist("Cinema4D")}>Cinema 4D</li>
        </ul>
      </div>

      {playlist == "blender" && <Blender />}
      {playlist == "3dmax" && <Component3dMax />}
      {playlist == "Maya" && <Maya />}
      {playlist == "Cinema4D" && <Cinema4D />}
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
