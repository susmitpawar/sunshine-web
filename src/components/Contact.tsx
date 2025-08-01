import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { PhoneIcon, EnvelopeIcon, UserIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'submissions'), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );

      setStatus('✅ Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('❌ Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-zinc-900" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-yellow-400"
        >
          <span className="inline-flex items-center gap-2">
            <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-blue-600 dark:text-yellow-400" />
            Contact Us
          </span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div className="flex items-center gap-3">
            <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-700 text-gray-800 dark:text-white focus:outline-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-700 text-gray-800 dark:text-white focus:outline-blue-500"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-700 text-gray-800 dark:text-white focus:outline-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-3">
            <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mt-2 text-gray-500 dark:text-gray-300" />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-700 text-gray-800 dark:text-white focus:outline-blue-500"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide transition-all duration-300"
          >
            Send Message
          </motion.button>

          {/* Status Message */}
          {status && (
            <p className="text-center text-sm font-medium mt-2 text-green-600 dark:text-green-400">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
