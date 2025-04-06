import React from 'react'
import Category from './Category';
import ContactForm from './Contact';
import "../styles/marquee.css";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import BrandSection from './Brand';

function Home() {
    return (
        <div>
            <div className="marquee-container">
                <div className="marquee-text">
                    Welcome to <span className='text-primary'>www.poultrydigital.com</span>,
                    1st B2B Website & Online Business Directory Of Indian Poultry Industry
                </div>
            </div>

            <Navbar />
            <HeroSection />
            <Category />
            <ContactForm />
            <BrandSection />
        </div>
    )
}

export default Home
