import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movies";


import React from "react";
import Header from "./components/Header";
import Error from "./pages/Error";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        

        <Route path="*" element={<Error />} />     
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
