import React from "react";
import { Route, Routes } from "react-router-dom";
import { Generator, Home, Lesson } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lesson />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </>
  );
};

export default App;
