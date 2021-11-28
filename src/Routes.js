import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPosting from "./pages/ListPosting";
import AddPosting from "./pages/AddPosting";
import Posting from "./pages/Posting";
import { posts } from "./constants/config";

const Links = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListPosting />} />
        <Route exact path="/post/:id" element={<Posting />} />
        <Route exact path="/add" element={<AddPosting />} />
        <Route exact path="/edit/:id" element={<AddPosting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Links;
