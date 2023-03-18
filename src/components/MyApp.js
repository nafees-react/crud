import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from './Navbar';
import Weather from './Weather';
import Users from './Users';
import AddUser from './AddUser';
import EditUser from './EditUser';

function MyApp() {
    return (
        <>
        <NavBar />
          <Routes>
            <Route  path="/" element={<Home />} exact />
            <Route  path="/home" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/Live-Weather-Status" element={<Weather />} />
            <Route  path="/users" element={<Users />} />
            <Route  path="/create" element={<AddUser />} />
            <Route  path="/edit" element={<EditUser />} />
            <Route path="*" element={<h1>Oops! Page not found..</h1>} />
          </Routes>
        </>
      );
}

export default MyApp;

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('root'));
}