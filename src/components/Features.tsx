import { motion } from 'framer-motion';
import {
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Fast Delivery',
    icon: RocketLaunchIcon,
    description: 'Quick turnaround to get your website live faster.',
  },
  {
    title: 'Mobile-Optimized',
    icon: DevicePhoneMobileIcon,
    description: 'Responsive, mobile-friendly design for all devices.',
  },
  {
    title: 'Affordable Pricing',
    icon: CurrencyDollarIcon,
    description: 'Get high-quality websites at the best price.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-100 dark:bg-zinc-900" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-yellow-400"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism p-6 rounded-2xl text-center shadow-lg border border-white/20 dark:border-zinc-800"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-yellow-400" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
