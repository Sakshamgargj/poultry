import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import image1 from '../assets/images/banner3.jpg';
import image2 from '../assets/images/banner2.png';
import image3 from '../assets/images/banner4.jpg';
import Category from './Category';
import ContactForm from './Contact';

const images = [image1, image2, image3];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const pauseAutoPlay = useCallback(() => {
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, []);

    const handlePrev = () => {
        pauseAutoPlay();
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        pauseAutoPlay();
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='h-auto'>
            <div className="relative w-full  h-[60vh] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 w-full h-full flex">
                    {images.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>

                <div className="absolute bottom-8 right-8 flex space-x-4">
                    <motion.button onClick={handlePrev} className="p-3 bg-white/30 text-white rounded-full backdrop-blur-md hover:bg-white/40">
                        <FaChevronLeft size={20} />
                    </motion.button>
                    <motion.button onClick={handleNext} className="p-3 bg-gray-700/40 text-white rounded-full backdrop-blur-md hover:bg-white/40">
                        <FaChevronRight size={20} />
                    </motion.button>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                pauseAutoPlay();
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        />
                    ))}
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 py-10 px-5">
                {/* Welcome Section */}
                <div>
                    <h2 className="text-2xl font-mono mb-1">Welcome</h2>
                    <hr className="border-t-2 border-gray-400 border-dotted mx-auto md:mx-0 mb-2" />
                    <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
                        vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
                    </p>
                    <p className="text-sm leading-relaxed mt-4">
                        Morbi nunc odio, gravida at, cursus nec. Donec accumsan malesuada orci. Donec sit amet eros.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-mono rounded hover:bg-yellow-600 transition">
                        Read More
                    </button>
                </div>

                {/* Popular Services */}
                <div>
                    <h2 className="text-2xl font-mono mb-1">Popular Services</h2>
                    <hr className="border-t-2 border-gray-400 border-dotted mx-auto md:mx-0 mb-2" />
                    <p className="text-sm leading-relaxed text-yellow-600">
                        Morbi nunc odio, gravida at <br />
                        Duis ultricies pharetra magna <br />
                        Donec accumsan malesuada orci <br />
                        Donec sit amet eros. <br />
                        Lorem ipsum dolor sit amet, consectetuer <br />
                        Mauris fermentum dictum magna
                    </p>
                    <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-mono rounded hover:bg-yellow-600 transition">
                        Read More
                    </button>
                </div>

                {/* Latest News */}
                <div>
                    <h2 className="text-2xl font-mono mb-1">Latest News</h2>
                    <hr className="border-t-2 border-gray-400 border-dotted mx-auto md:mx-0 mb-2" />
                    <p className="text-xs text-gray-500 font-mono">Posted: Jan 15, 2011</p>
                    <p className="text-sm leading-relaxed mt-1">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
                        vestibulum molestie
                    </p>
                    <p className="text-xs text-gray-500 font-mono mt-4">Posted: Jan 15, 2011</p>
                    <p className="text-sm leading-relaxed mt-1">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
                        vestibulum
                    </p>
                    <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-mono rounded hover:bg-yellow-600 transition">
                        Read More
                    </button>
                </div>
            </div>

            <Category/>
            <ContactForm/>
        </div>
    );
};

export default HeroSection;
