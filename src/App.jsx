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
import ProfilePage from './components/Profile';
import Product from "./components/category/Product";
import Tagline from "./components/Tagline";
import BookList from "./components/Book";
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
      <Tagline/>
      <Navbar />
      <Routes>
        <Route Route path="/" element={<Home />} />
        <Route Route path="/categories" element={<Category />} />
        <Route Route path="/company-detail/:id" element={<Product />} />
        <Route Route path="/contact" element={<ContactForm />} />
        <Route Route path="/about" element={<AboutPage />} />
        <Route Route path="/login" element={<LoginPage />} />
        <Route Route path="/register" element={<RegisterPage />} />
        <Route path="/email-verify/:token" element={<EmailVerify />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/publications" element={<BookList />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App;