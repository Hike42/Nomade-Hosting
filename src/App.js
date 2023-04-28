import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { LoginForm, SignupForm } from "./Login";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li className="element">
              <Link to="/signup">Inscription</Link>
            </li>
            <li className="element">
              <Link to="/login">Connexion</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
