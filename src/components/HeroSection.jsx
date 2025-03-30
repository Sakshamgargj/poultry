import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import image1 from '../assets/images/banner22.jpg';
import image2 from '../assets/images/banner11.jpg';
import image3 from '../assets/images/img5.jpg';
import video1 from '../assets/video/bannervideo.mp4';
import Category from './Category';
import ContactForm from './Contact';
import Additional from './Additional';

const images = [image1, image2, image3];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(-1); // -1 for video, 0+ for images
    const [direction, setDirection] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [videoPlayed, setVideoPlayed] = useState(false);

    useEffect(() => {
        if (!videoPlayed) {
            setTimeout(() => {
                setVideoPlayed(true);
                setCurrentIndex(0);
            }, 10000); // Play video for 5 seconds before switching to images
            return;
        }

        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setDirection(1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, videoPlayed]);

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
        <div className='h-auto select-none'>
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 w-full h-full flex">
                    {!videoPlayed ? (
                        <video
                            src={video1}
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                        />
                    ) : (
                        images.map((src, index) => (
                            <motion.img
                                key={index}
                                src={src}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))
                    )}
                </div>

                {videoPlayed && (
                    <>
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
                    </>
                )}
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 text-gray-700 px-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-5 rounded-lg shadow-lg bg-white"
                >
                    <motion.h2
                        className="text-2xl font-mono mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1, color: "#ca8a04" }}
                        transition={{ duration: 0.3 }}
                    >
                        Welcome
                    </motion.h2>
                    <hr className="border-t-2 border-gray-400 border-dotted mx-auto md:mx-0 mb-2" />
                    <motion.p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
                    </motion.p>
                    <motion.p className="text-sm leading-relaxed ">
                        Morbi nunc odio, gravida at, cursus nec. Donec accumsan malesuada orci. Donec sit amet eros.
                    </motion.p>
                    <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-mono rounded hover:bg-yellow-600 transition">
                        Get Started
                    </button>
                </motion.div>
            </div>

            <Category />
            <ContactForm />
            <Additional />
        </div>
    );
};

export default HeroSection;
