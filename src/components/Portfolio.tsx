import { motion } from 'framer-motion';

const portfolioItems = [
  { title: 'Project 1', image: '/assets/project1.jpg' },
  { title: 'Project 2', image: '/assets/project2.jpg' },
  { title: 'Project 3', image: '/assets/project3.jpg' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center mb-6">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism rounded-lg shadow-lg overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;