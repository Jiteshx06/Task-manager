import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import TaskBoard from "./mainpage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/profile" /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* TaskBoard will be rendered full-screen */}
          <Route path="/mainpage" element={<TaskBoard />} />
        </Routes>
      </MainLayout>
      <ToastContainer />
    </Router>
  );
}

// Layout Component to manage different page structures
function MainLayout({ children }) {
  const location = useLocation();
  const isFullScreen = location.pathname === "/mainpage";

  return isFullScreen ? (
    <>{children}</> // No wrapper for full-screen TaskBoard
  ) : (
    <div className="auth-wrapper">
      <div className="auth-inner">{children}</div>
    </div>
  );
}

export default App;
