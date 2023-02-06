import React from "react";
import { Route, Routes } from "react-router-dom";
import { Tutorial } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </>
  );
};

export default App;
