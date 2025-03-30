import { Link } from 'react-router-dom';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const searchInputRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const mobileSearchInputRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Focus input when search opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Close mobile menu on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    const handleSearch = (e, isMobile = false) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Implement search functionality
            console.log('Searching for:', searchQuery);
        }
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setSearchQuery('');
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Focus the mobile search input when menu opens
        if (!isMobileMenuOpen && mobileSearchInputRef.current) {
            setTimeout(() => {
                mobileSearchInputRef.current.focus();
            }, 300); // Delay to wait for animation
        }
    };

    return (
        <motion.nav 
            className={`fixed w-full flex items-center justify-between px-4 py-3 z-50  ${
                isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
            {/* Logo */}
            <Link to="/" className="text-2xl font-mono flex items-center z-20">
                <motion.span 
                    className="text-yellow-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    LOGO
                </motion.span>
                <motion.span 
                    className="text-yellow-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    IMG
                </motion.span>
            </Link>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
                <AnimatePresence>
                    {isSearchOpen ? (
                        <motion.form 
                            onSubmit={(e) => handleSearch(e, false)} 
                            className="flex items-center relative"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: '300px', opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                            />
                            <motion.button 
                                type="submit"
                                className="absolute right-10 text-gray-500 hover:text-yellow-600 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaSearch />
                            </motion.button>
                            <motion.button 
                                type="button"
                                onClick={toggleSearch}
                                className="absolute right-3 text-gray-500 hover:text-red-600 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaTimes />
                            </motion.button>
                        </motion.form>
                    ) : (
                        <motion.button
                            onClick={toggleSearch}
                            className="mr-4 text-gray-600 hover:text-yellow-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaSearch size={18} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-20">
                <motion.button 
                    onClick={toggleMobileMenu}
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </motion.button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <Link to='/about'>
                    <motion.button
                        className="text-gray-700 font-mono hover:text-yellow-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ABOUT
                    </motion.button>
                </Link>
                <Link to='/contact'>
                    <motion.button
                        className="text-gray-700 font-mono hover:text-yellow-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CONTACT
                    </motion.button>
                </Link>
                <Link to='/login'>
                    <motion.button
                        className="px-4 py-2 text-yellow-600 font-mono border border-yellow-500 rounded-md hover:bg-yellow-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        LOGIN
                    </motion.button>
                </Link>
                <Link to='/register'>
                    <motion.button
                        className="px-4 py-2 text-white font-mono bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        SIGN UP
                    </motion.button>
                </Link>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        ref={mobileMenuRef}
                        className="fixed top-0 left-0 w-full h-screen bg-white z-10 pt-16"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {/* Mobile Search in Menu */}
                        <div className="px-6 py-4 border-b border-gray-200">
                            <form onSubmit={(e) => handleSearch(e, true)} className="relative">
                                <input
                                    ref={mobileSearchInputRef}
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pr-10 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                                />
                                <button 
                                    type="submit"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-600 transition-colors p-1"
                                >
                                    <FaSearch size={18} />
                                </button>
                            </form>
                        </div>
                        
                        <div className="flex flex-col items-center space-y-6 p-6">
                            <Link to='/contact' onClick={() => setIsMobileMenuOpen(false)}>
                                <motion.span
                                    className="text-xl font-medium text-gray-700 hover:text-yellow-600 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact
                                </motion.span>
                            </Link>
                            <Link to='/login' onClick={() => setIsMobileMenuOpen(false)}>
                                <motion.span
                                    className="text-xl font-medium text-yellow-600 hover:text-yellow-800 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Login
                                </motion.span>
                            </Link>
                            <Link to='/register' onClick={() => setIsMobileMenuOpen(false)}>
                                <motion.div
                                    className="px-8 py-3 text-white text-lg font-medium bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Register
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;