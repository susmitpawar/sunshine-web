import { motion } from 'framer-motion';
import { 
  MdWeb,
  MdCode,
  MdSearch,
  MdStorage
} from 'react-icons/md';

const services = [
  { 
    title: 'Web Design', 
    description: 'Creative and user-friendly designs that convert visitors to customers.',
    icon: <MdWeb className="w-8 h-8" />,
    color: 'from-purple-500 to-indigo-500'
  },
  { 
    title: 'Web Development', 
    description: 'Robust, scalable websites with modern technologies.',
    icon: <MdCode className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'SEO', 
    description: 'Optimize your site to rank higher in search results.',
    icon: <MdSearch className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'Hosting Support', 
    description: 'Reliable, high-performance hosting solutions.',
    icon: <MdStorage className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className={`relative h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl z-10`}>
                {/* Icon with animation */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring" }}
                  className={`w-16 h-16 mb-6 mx-auto rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center`}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
                
                {/* Animated border bottom */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;