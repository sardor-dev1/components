import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
