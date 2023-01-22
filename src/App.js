import React from "react";
import "./styles.css";
import Background from "./component/Background";
import Foreground from "./component/Foreground";
import Home from "./component/Home";
//
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="mainContainer">
          <Background />
          <Routes>
            <Route path="/" element={<Foreground />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
