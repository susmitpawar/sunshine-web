import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        {/* Left Image */}
        <motion.img
          src="/assets/about.png"
          alt="About Sunshine Web Studio"
          className="w-full h-auto rounded-xl shadow-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* Right Content */}
        <motion.div
          className="glassmorphism p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">About Sunshine Web Studio</h2>
          <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
            At <span className="font-semibold text-purple-600">Sunshine Web Studio</span>, we specialize in crafting beautiful,
            responsive, and high-performance websites tailored to your unique needs.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Whether you're a startup, local business, or established brand, our team blends creativity with cutting-edge
            technology to bring your ideas to life.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            We believe in clean code, smooth animations, SEO-friendly architecture, and stunning visuals that create lasting impressions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
