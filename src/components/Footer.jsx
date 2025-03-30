import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      url: 'https://facebook.com' 
    },
    { 
      icon: <FaTwitter />, 
      url: 'https://twitter.com' 
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://linkedin.com' 
    }
  ];

  return (
    <footer className="bg-white select-none font-mono dark:bg-yellow-700 text-white dark:text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">
            LOGOIMG
          </h3>
          <p className="text-gray-600  dark:text-gray-200">
            Delivering high-quality poultry products accessories and machines to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-gray-600 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-mono pl-4 mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-200 dark:text-gray-200">
          © {currentYear} LOGOIMG. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;