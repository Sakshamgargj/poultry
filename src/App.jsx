import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import ContactForm from "./components/Contact";
import AboutPage from "./components/About";
import { useEffect } from "react";
import EmailVerify from "./components/Verify";

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
        <Routes>
          <Route Route path="/" element={<Home/>} />
          <Route Route path="/categories" element={<Category/>} />
          <Route Route path="/categories" element={<Category/>} />
          <Route Route path="/contact" element={<ContactForm/>} />
          <Route Route path="/about" element={<AboutPage/>} />
          <Route Route path="/login" element={<LoginPage/>} />
          <Route Route path="/register" element={<RegisterPage/>} />
          <Route path="/email-verify/:token" element={<EmailVerify/>} />
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
