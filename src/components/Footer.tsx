import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: <FaInstagram className="w-4 h-4" />, 
      href: "https://www.instagram.com/susmit_pawar_13/",
      color: "hover:text-[#E4405F]"
    },
    { 
      icon: <FaLinkedin className="w-4 h-4" />, 
      href: "https://www.linkedin.com/in/susmit-pawar-51bb191a4",
      color: "hover:text-[#0A66C2]"
    },
    { 
      icon: <FaWhatsapp className="w-4 h-4" />, 
      href: "https://wa.me/917875884096",
      color: "hover:text-[#25D366]"
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              Sunshine <span className="text-yellow-400">Web</span> Studio
            </h3>
            <p className="text-sm">
              Crafting beautiful, functional websites that help your business shine online.
            </p>
            <div className="flex items-center space-x-2">
              <FiMail className="w-4 h-4 text-yellow-400" />
              <a href="mailto:hello@sunshinewebstudio.com" className="text-sm hover:text-white">
                hello@sunshinewebstudio.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="w-4 h-4 text-yellow-400" />
              <a href="tel:+917875884096" className="text-sm hover:text-white">
                +91 78758 84096
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#portfolio" className="text-sm hover:text-yellow-400 transition">Portfolio</a></li>
              <li><a href="#about" className="text-sm hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#contact" className="text-sm hover:text-yellow-400 transition">Contact</a></li>
              <li><a href="/blog" className="text-sm hover:text-yellow-400 transition">Blog</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-sm">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button 
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-4 py-2 rounded-r-md text-sm transition"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 hover:bg-gray-700 p-2 rounded-full transition ${link.color}`}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <p>© {new Date().getFullYear()} Sunshine Web Studio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-400 transition">Terms of Service</a>
            <a href="/sitemap" className="hover:text-yellow-400 transition">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;