import { motion } from 'framer-motion';

const websiteTypes = [
  {
    title: 'E-Commerce',
    image: '/assets/ecommerce.jpg',
    description: 'Online storefronts with seamless checkout and product management.',
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Business',
    image: '/assets/business.jpg',
    description: 'Professional websites that showcase your brand and services effectively.',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Blog',
    image: '/assets/blog.jpg',
    description: 'Dynamic platforms for sharing ideas, stories, and updates regularly.',
    color: 'from-green-600 to-emerald-500'
  },
  {
    title: 'Portfolio',
    image: '/assets/portfolio.jpg',
    description: 'Creative portfolios for artists, designers, and professionals to display their work.',
    color: 'from-yellow-600 to-amber-500'
  },
  {
    title: 'Event',
    image: '/assets/event.jpg',
    description: 'Websites to promote and manage events with RSVP and ticketing features.',
    color: 'from-red-600 to-orange-500'
  },
  {
    title: 'Personal',
    image: '/assets/personal.jpg',
    description: 'Personal branding websites tailored to reflect your individuality.',
    color: 'from-indigo-600 to-violet-500'
  },
  {
    title: 'Membership',
    image: '/assets/membership.jpg',
    description: 'Membership-based platforms with user access control and content protection.',
    color: 'from-fuchsia-600 to-purple-500'
  },
  {
    title: 'Non-profit',
    image: '/assets/nonprofit.jpg',
    description: 'Support-driven websites focused on causes and donations.',
    color: 'from-teal-600 to-cyan-400'
  },
  {
    title: 'Informational',
    image: '/assets/info.jpg',
    description: 'Content-rich websites for educational or informative purposes.',
    color: 'from-gray-600 to-blue-400'
  },
];

const WebsiteTypes: React.FC = () => {
  return (
    <section id="website-types" className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Types of Websites We Build
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="relative group h-full flex flex-col"
            >
              <div className="relative flex-1 rounded-2xl shadow-lg overflow-hidden">
                {/* Image with zoom effect */}
                <motion.div
                  className="h-full w-full"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Always visible title at bottom */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${type.color} p-4 text-white text-center`}>
                  <h3 className="text-lg font-bold">{type.title}</h3>
                </div>
                
                {/* Description overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex items-center justify-center p-6"
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="text-white text-center text-lg"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {type.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteTypes;