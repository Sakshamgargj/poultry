import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Category from './components/category/Category';
import LoginPage from "./components/auth/Login";
import RegisterPage from "./components/auth/Register";
import ContactForm from "./components/Contact";
import AboutPage from "./components/About";
import { useEffect } from "react";
import EmailVerify from "./components/Verify";
import "./styles/marquee.css";

import ProfilePage from './components/Profile';
import Product from "./components/category/Product";
function App() {

  useEffect(() => {
    const disableContextMenu = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return (
    <div>
      <div className="marquee-container">
        <div className="marquee-text">
          Welcome to <span className='text-primary'>www.poultrydigital.com</span>,
          1st B2B Website & Online Business Directory Of Indian Poultry Industry
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route Route path="/" element={<Home />} />
        <Route Route path="/categories" element={<Category />} />
        <Route Route path="/product/:id" element={<Product />} />
        <Route Route path="/contact" element={<ContactForm />} />
        <Route Route path="/about" element={<AboutPage />} />
        <Route Route path="/login" element={<LoginPage />} />
        <Route Route path="/register" element={<RegisterPage />} />
        <Route path="/email-verify/:token" element={<EmailVerify />} />
        <Route path="/profilePage" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App;