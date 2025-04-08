import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Keep original imports
import image1 from '../assets/images/banner22.jpg';
import image2 from '../assets/images/banner11.jpg';
import image3 from '../assets/images/img5.jpg';
import video1 from '../assets/video/bannervideo.mp4';
import SearchWithTiltImage from './SearchWithTiltImage';

const HeroSection = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(-1); // -1 for video, 0+ for images
    const [autoPlay, setAutoPlay] = useState(true);
    const [direction, setDirection] = useState(1);
    const [videoPlayed, setVideoPlayed] = useState(false);

    const banners = [
        {
            id: 1,
            image: image1,
        },
        {
            id: 2,
            image: image2,
        },
        {
            id: 3,
            image: image3,
        }
    ];

    const updates = [
        "New health protocols released for commercial poultry farms ",
        "Industry growth report now available for download",
        "Product showcase event postponed to May 15th",
        "Membership discount available until end of month",
        "New partnership with international poultry association announced",
        "New partnership with international poultry association announced",
        "Industry growth report now available for download",
    ];

    // Initial video play then transition to images
    useEffect(() => {
        if (!videoPlayed) {
            setTimeout(() => {
                setVideoPlayed(true);
                setCurrentBannerIndex(0);
            }, 10000); // Play video for 10 seconds before switching to images
            return;
        }

        let interval;
        if (autoPlay) {
            interval = setInterval(() => {
                setDirection(1);
                setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [autoPlay, videoPlayed, banners.length]);

    const pauseAutoPlay = useCallback(() => {
        setAutoPlay(false);
        setTimeout(() => setAutoPlay(true), 10000); // Resume auto rotation after 10 seconds
    }, []);

    const handlePrev = () => {
        pauseAutoPlay();
        setDirection(-1);
        setCurrentBannerIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    const handleNext = () => {
        pauseAutoPlay();
        setDirection(1);
        setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
    };

    return (
        <div className="w-full select-none ">
            {/* Main hero section with banners and updates */}
            <div className="w-full pt-16 px-4 md:px-8" style={{ height: "auto" }}>
                <div className="flex flex-col pt-6 md:flex-row w-full space-x-8">
                    {/* Banner/Video section - full width on mobile, 2/3 width on desktop */}
                    <div className="w-full md:w-2/3 relative overflow-hidden" style={{ height: "45vh" }}>
                        {/* Video player */}
                        {!videoPlayed ? (
                            <video
                                src={video1}
                                className="absolute inset-0 w-full h-full rounded-2xl object-cover"
                                autoPlay
                                muted
                                playsInline
                            />
                        ) : (
                            /* Image banners */
                            banners.map((banner, index) => (
                                <motion.div
                                    key={banner.id}
                                    className="absolute inset-0 w-full h-full"
                                    initial={{
                                        x: direction > 0 ? "100%" : "-100%",
                                        opacity: 0
                                    }}
                                    animate={{
                                        x: index === currentBannerIndex ? 0 : direction > 0 ? "-100%" : "100%",
                                        opacity: index === currentBannerIndex ? 1 : 0
                                    }}
                                    transition={{
                                        x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                                        opacity: { duration: 0.5 }
                                    }}
                                    style={{
                                        zIndex: index === currentBannerIndex ? 10 : 0
                                    }}
                                >
                                    <img
                                        src={banner.image}
                                        alt={`Banner ${banner.id}`}
                                        className="absolute inset-0 w-full rounded-2xl h-full object-cover"
                                    />
                                </motion.div>
                            ))
                        )}

                        {/* Navigation elements - only show when video is done */}
                        {videoPlayed && (
                            <>
                                {/* Navigation buttons */}
                                <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                                    <button
                                        onClick={handlePrev}
                                        className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm"
                                    >
                                        <FaChevronLeft size={16} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm"
                                    >
                                        <FaChevronRight size={16} />
                                    </button>
                                </div>

                                {/* Indicator dots */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                                    {banners.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                pauseAutoPlay();
                                                setDirection(index > currentBannerIndex ? 1 : -1);
                                                setCurrentBannerIndex(index);
                                            }}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                currentBannerIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Updates section - full width on mobile, 1/3 width on desktop */}
                    <div className="w-full md:w-1/3 border-t md:border-t-0 rounded-2xl border-gray-200 bg-white">
                        <div className="text-center py-2 rounded-2xl border-b border-gray-400">
                            <h3 className="font-bold text-sm md:text-base text-darkprimary">IMPORTANT UPDATES</h3>
                        </div>

                        <div className="flex flex-col md:h-[40vh] overflow-y-auto">
                            {updates.map((update, index) => (
                                <div
                                    key={index}
                                    className="flex border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <div className="flex-grow p-3">
                                        <p className="text-xs md:text-sm text-darkText">{update}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <SearchWithTiltImage/>
            </div>
        </div>
    );
};

export default HeroSection;