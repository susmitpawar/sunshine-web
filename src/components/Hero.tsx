import { motion } from 'framer-motion';
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/dp.jpg')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 container mx-auto px-4 text-center glassmorphism p-6 max-w-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-md"
        >
          We Build Beautiful Websites
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg mb-6 text-white/90"
        >
          Craft your digital presence with elegance, performance, and impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg hover:from-blue-700 hover:to-purple-800 shadow-lg transition-all"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-5 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition-all"
          >
            Our Services
          </a>
        </motion.div>
      </motion.div>

      {/* Contact Info in Corner */}
      <div className="absolute bottom-4 right-4 hidden md:block z-10 text-sm text-white/80 bg-black/30 px-4 py-2 rounded-lg shadow-md backdrop-blur-sm">
        <p>Email: <a href="mailto:sunshiensp1113@gmail.com" className="underline">sunshiensp1113@gmail.com</a></p>
        <p>Phone: <a href="tel:+917875884096" className="underline">+91 7875884096</a></p>
      </div>
    </section>
  );
};

export default Hero;
