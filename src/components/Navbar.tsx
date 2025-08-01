import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border-b border-white/10 shadow-md px-6 py-3 flex items-center justify-between"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <img src="/assets/sun.png" alt="Logo" className="w-8 h-8" />
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text">
          Sunshine Web Studio
        </h1>
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-500 transition-all duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Side: Search + Toggle */}
      <div className="flex items-center space-x-3">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1 rounded-md text-sm bg-white/30 dark:bg-white/10 placeholder-gray-600 dark:placeholder-gray-400 text-black dark:text-white focus:outline-none backdrop-blur-md border border-white/20"
        />
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};

export default Navbar;
