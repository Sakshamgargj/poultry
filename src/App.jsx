import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import ContactForm from "./components/Contact";
import AboutPage from "./components/About";

function App() {

  return (
      <div>
        <Navbar/>
        <Routes>
          <Route Route path="/" element={<HeroSection/>} />
          <Route Route path="/categories" element={<Category/>} />
          <Route Route path="/categories" element={<Category/>} />
          <Route Route path="/contact" element={<ContactForm/>} />
          <Route Route path="/about" element={<AboutPage/>} />
          <Route Route path="/login" element={<LoginPage/>} />
          <Route Route path="/register" element={<RegisterPage/>} />
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
