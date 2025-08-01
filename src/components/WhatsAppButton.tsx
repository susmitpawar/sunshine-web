import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  // Pre-filled welcome message
  const welcomeMessage = encodeURIComponent(
    "Hello! Welcome to Sunshine Web Studio 🌞\n\n" +
    "Thanks for reaching out! How can we help you today?\n\n" +
    "• Website Development\n" +
    "• E-commerce Solutions\n" +
    "• SEO Services\n" +
    "• Maintenance & Support\n\n" +
    "Feel free to ask any questions!"
  );

  return (
    <motion.a
      href={`https://wa.me/917875884096?text=${welcomeMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative group">
        {/* Animated glow effect */}
        <div className="absolute -inset-1.5 rounded-full bg-green-400 blur-md opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse" />
        
        {/* Tooltip */}
        <div className="absolute right-16 bottom-1 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us!
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
        </div>
        
        {/* Main button */}
        <div className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden">
          {/* WhatsApp icon */}
          <svg
            className="w-7 h-7 z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4.1-10.3a2.7 2.7 0 00-1.9-.8c-.5 0-1 .2-1.4.5s-.7.8-.7 1.4a2.2 2.2 0 00.5 1.5l.2.3a7.7 7.7 0 01.9 1.3 4.4 4.4 0 011.3.9l.3.2a2.2 2.2 0 001.5.5c.6 0 1.1-.3 1.4-.7s.5-.9.5-1.4a2.7 2.7 0 00-.8-1.9l-.3-.3a4.4 4.4 0 00-1.3-.9 7.7 7.7 0 00-1.3-.9l-.2-.2zm-2.3 7.5a.7.7 0 01-.5-.2l-1.2-1.2a.7.7 0 01-.2-.5.7.7 0 01.2-.5l.3-.3a.7.7 0 01.5-.2.7.7 0 01.5.2l.7.7.7-.7a.7.7 0 01.5-.2.7.7 0 01.5.2l.3.3a.7.7 0 01.2.5.7.7 0 01-.2.5l-1.2 1.2a.7.7 0 01-.5.2z"/>
          </svg>
          
          {/* Notification dot */}
          <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75" />
          <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;