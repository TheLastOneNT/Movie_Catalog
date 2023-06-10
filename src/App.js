import React from "react";
import { Routes, Route } from "react-router-dom";

import AppLayout from "./Layout";
import Gallery from "./pages/Gallery";
import MovieList from "./pages/List";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="gallery" element={<Gallery />} />
        <Route path="list" element={<MovieList />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function NoMatch() {
  return <h1>404</h1>;
}
