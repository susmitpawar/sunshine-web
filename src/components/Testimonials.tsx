import { motion } from 'framer-motion';
import { FaQuoteLeft, FaLeaf, FaSeedling, FaTree, FaWater, FaIndustry, FaOilCan } from 'react-icons/fa';

const testimonials = [
  { 
    quote: 'Sunshine Web Studio cultivated our online presence like expert gardeners! Our website now attracts 3x more visitors and processes nursery orders seamlessly, just like our Hitachi irrigation systems work.',
    author: 'Chaitanya & Indrayani Patil',
    role: 'Founders, Hitachi Nursery',
    rating: 5,
    icon: <FaWater className="text-teal-500" />,
    highlight: true,
    bgGradient: 'from-teal-100 to-emerald-100'
  },
  { 
    quote: 'Our industrial lubricants business got a digital transformation. The new website processes 40% more inquiries and showcases our cutting oils like precision machinery.',
    author: 'Sachin Chavan',
    role: 'Director, Topface Technologies Pvt. Ltd.',
    rating: 5,
    icon: <FaOilCan className="text-amber-600" />,
    industrial: true,
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  { 
    quote: 'Our Chityan Garden website blossomed under Sunshine care - online orders grew 65% in first season with their plant-perfect design that showcases our nursery beautifully.',
    author: 'Rajesh Chityan',
    role: 'Owner, Chityan Garden',
    rating: 5,
    icon: <FaTree className="text-green-500" />,
    bgGradient: 'from-emerald-100 to-green-50'
  },
  { 
    quote: 'They designed our site to grow like our plants - easy to maintain and always fresh. The plant care guides they suggested are our most popular pages!',
    author: 'Priya Nair',
    role: 'Manager, GreenSprout Nursery',
    rating: 5,
    icon: <FaSeedling className="text-lime-500" />,
    bgGradient: 'from-lime-50 to-green-50'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="min-h-screen py-20 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400">
            Cultivating Digital Growth
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            How we're helping businesses bloom online - from nurseries to industrial solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{ y: -10 }}
              className={`relative group ${testimonial.highlight ? 'md:col-span-2' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgGradient} dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100`} />
              
              <div className="relative h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl z-10">
                <div className={`absolute top-6 left-6 ${
                  testimonial.highlight ? 'text-teal-100' : 
                  testimonial.industrial ? 'text-blue-100' : 
                  'text-green-100'
                } dark:text-gray-600 text-5xl`}>
                  <FaQuoteLeft />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaQuoteLeft 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <div className="text-3xl">
                    {testimonial.icon}
                  </div>
                </div>
                
                <p className="text-lg italic mb-6 relative z-10">"{testimonial.quote}"</p>
                
                <div className={`border-t ${
                  testimonial.highlight ? 'border-teal-200' : 
                  testimonial.industrial ? 'border-blue-200' : 
                  'border-green-200'
                } dark:border-gray-700 pt-4`}>
                  <p className={`font-bold text-lg ${
                    testimonial.highlight ? 'text-teal-800' : 
                    testimonial.industrial ? 'text-blue-800' : 
                    'text-green-800'
                  } dark:text-white`}>{testimonial.author}</p>
                  <p className={`${
                    testimonial.highlight ? 'text-teal-600' : 
                    testimonial.industrial ? 'text-blue-600' : 
                    'text-green-600'
                  } dark:text-gray-400`}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
            <FaLeaf className="mr-2" />
            Explore More Client Success Stories
          </button>
        </motion.div>

        {/* Topface Technologies Special Mention */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl border border-blue-200 dark:border-gray-600"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-6 mb-4 md:mb-0">
              <FaIndustry className="text-4xl text-blue-600 dark:text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-800 dark:text-white">Topface Technologies Pvt. Ltd.</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">Sachin Chavan</span> | 
                <a href="mailto:topfacetechnologies@gmail.com" className="ml-2 text-blue-600 dark:text-cyan-400 hover:underline">topfacetechnologies@gmail.com</a> | 
                <span className="ml-2">Pune</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Specializing in premium industrial cutting oils and lubricants, delivering precision solutions that keep machinery running at peak performance while reducing maintenance costs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;