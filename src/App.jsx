
// import React from 'react'
// import Navbar from './Componenents/Navbar'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }

// export default App
import React from "react";
import Navbar from "./Componenents/Navbar";
import Home from "./Componenents/Home";
import About from "./Componenents/About";
import Menu from "./Componenents/Menu";
import Footer from "./Componenents/Footer";
import Dishes from "./Componenents/Dishes";
import Reviews from "./Componenents/Login";


import { Route, Routes } from "react-router-dom";

import LoginForm from "./Componenents/Login";
import ContactForm from "./Componenents/ContactForm";


const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="Login" element={<LoginForm />} />
      </Routes>

      <div className="App">
        <header className="App-header">
          {/* <h1>My Contact Form</h1> */}
          <ContactForm />
        </header>
      </div>

      <Footer />
    </div>
  );
};

export default App;