import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter4" element={<Chapter4 />} />
        <Route
          path="/"
          element={
            <div>
              <h1>역대 기출문제</h1>
              <div className="link-container">
                <Link to="/chapter1" className="button-link">
                  1장 보기
                </Link>
                <Link to="/chapter2" className="button-link">
                  2장 보기
                </Link>
                <Link to="/chapter3" className="button-link">
                  3장 보기
                </Link>
                <Link to="/chapter4" className="button-link">
                  4장 보기
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
