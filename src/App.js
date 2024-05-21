import React from "react";
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
import "./App.css";
Userfront.init("demo1234");

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/main">Главная</Link>
            </li>
            <li>
              <Link to="/">Регистрация</Link>
            </li>
            <li>
              <Link to="/login">Вход</Link>
            </li>
            <li>
              <Link to="/reset">Забыл пароль</Link>
            </li>
            <li>
              <Link to="/dashboard">Уроки</Link>
            </li>
          </ul>
          {Userfront.tokens.accessToken && (
            <div style={{ width: "200px" }}>
              <LogoutButton />
            </div>
          )}
        </nav> */}

        <Routes>
          <Route
            path="/main"
            element={
              <div className="App">
                <Main />
              </div>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
    <div>
      <h2>Home</h2>
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
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
