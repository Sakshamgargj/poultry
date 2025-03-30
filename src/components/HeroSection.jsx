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

            <Category />
            <ContactForm />
            <Additional />
        </div>
    );
};

export default HeroSection;
