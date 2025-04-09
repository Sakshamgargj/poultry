import React from 'react'
import Category from './category/Category';
import ContactForm from './Contact';
import HeroSection from './HeroSection';
import BrandSection from './Brand';

function Home() {
    return (
        <div>
            <HeroSection />
            <Category />
            <ContactForm />
            <BrandSection />
        </div>
    )
}

export default Home
