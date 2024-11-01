import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chapter5" element={<Chapter5 />} />
        <Route path="/chapter6" element={<Chapter6 />} />
        <Route path="/chapter7" element={<Chapter7 />} />
        <Route
          path="/"
          element={
            <div>
              <h1>역대 기출문제</h1>
              <div className="link-container">
                <Link to="/chapter5" className="button-link">
                  5장 보기
                </Link>
                <Link to="/chapter6" className="button-link">
                  6장 보기
                </Link>
                <Link to="/chapter7" className="button-link">
                  7장 보기
                </Link>
              </div>
              <div className="image-container">
                <img src="/public/images/joke1.png" alt="Joke 1" />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
