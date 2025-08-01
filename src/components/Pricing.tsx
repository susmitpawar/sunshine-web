import { motion } from 'framer-motion';
import { FaCheckCircle, FaRegCheckCircle, FaShoppingCart, FaStar } from 'react-icons/fa';

const pricingPlans = [
  {
    title: 'Standard Plan',
    originalPrice: '₹10,000',
    discountedPrice: '₹7,999',
    gst: '(+18% GST ₹1,440)',
    features: [
      '5 pages Website',
      '1 Year Free Domain (.com .in .org)',
      '1 Year Free Cloud Hosting',
      'Dynamic Website (Premium Design)',
      'Admin Access',
      'Lifetime 24/7 Free Hosting Support',
      'Unlimited Images & Videos Upload',
      'Free SSL Certificates',
      '5 Free Email IDs',
      'SEO Friendly Website',
      '100% Responsive Website',
      'Live Chat Integration',
      'Payment Gateway Integration',
      'Social Media Integration',
      'Call Button Integration',
      'WhatsApp Button Integration',
      'Inquiry Form',
      '1 Year Free Technical Support',
      'Annual Renewal: ₹4,000'
    ],
    popular: false,
    category: 'Under ₹5,000'
  },
  {
    title: 'Premium Plan',
    originalPrice: '₹20,000',
    discountedPrice: '₹13,999',
    gst: '(+18% GST ₹2,520)',
    features: [
      '12 pages Website',
      '1 Year Free Domain (.com .in .org)',
      '1 Year Free Cloud Hosting',
      'Dynamic Website (Premium Design)',
      'Admin Access',
      'Google Search Console Setup',
      'Lifetime 24/7 Free Hosting Support',
      'Unlimited Images & Videos Upload',
      'Free SSL Certificates',
      '10 Free Email IDs',
      'SEO Friendly Website',
      '100% Responsive Website',
      'Live Chat Integration',
      'Payment Gateway Integration',
      'Social Media Integration',
      'Call Button Integration',
      'WhatsApp Button Integration',
      'Inquiry Form',
      'Woocommerce Features',
      '1 Year Free Technical Support',
      'Annual Renewal: ₹4,000'
    ],
    popular: true,
    category: '₹5,000 - ₹10,000'
  },
  {
    title: 'Custom Plan',
    originalPrice: 'Custom',
    discountedPrice: 'Custom Quote',
    gst: '(18% GST Applicable)',
    features: [
      'Pages: According to Requirement',
      '1 Year Free Domain (.com .in .org)',
      '1 Year Free Cloud Hosting',
      'Dynamic Website',
      'Admin Access',
      'Google Search Console Setup',
      'Lifetime 24/7 Free Hosting Support',
      'Unlimited Images & Videos Upload',
      'Free SSL Certificates',
      '10 Free Email IDs',
      'SEO Friendly Website',
      '100% Responsive Website',
      'Live Chat Integration',
      'Payment Gateway Integration',
      'Social Media Integration',
      'Call Button Integration',
      'WhatsApp Button Integration',
      'Inquiry Form',
      'Woocommerce Features',
      '1 Year 24/7 Free Support',
      'Annual Renewal: ₹4,000'
    ],
    popular: false,
    category: 'Above ₹10,000'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Our Pricing Plans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Affordable website solutions tailored for businesses of all sizes
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center">
                  <FaStar className="mr-1" />
                  MOST POPULAR
                </div>
              )}

              {/* Price category badge */}
              <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {plan.category}
              </div>

              <div className={`h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 ${plan.popular ? 'border-yellow-400' : 'border-white dark:border-gray-700'}`}>
                <div className={`p-6 ${plan.popular ? 'bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20' : 'bg-white dark:bg-gray-800'}`}>
                  <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
                    {plan.title}
                  </h3>
                  
                  <div className="text-center mb-4">
                    <span className="text-gray-500 dark:text-gray-400 line-through mr-2">
                      {plan.originalPrice}
                    </span>
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {plan.discountedPrice}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {plan.gst}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium ${plan.popular 
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white hover:shadow-lg' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg'
                    } transition-all duration-300 flex items-center justify-center`}
                  >
                    <FaShoppingCart className="mr-2" />
                    Get Started
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;