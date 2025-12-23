import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cherry-500 to-primary-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 korean-text text-6xl font-bold text-white">한</div>
        <div className="absolute top-20 right-20 korean-text text-4xl font-bold text-white">국</div>
        <div className="absolute bottom-20 left-20 korean-text text-5xl font-bold text-white">어</div>
        <div className="absolute bottom-10 right-10 korean-text text-3xl font-bold text-white">🌸</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Your Korean Dream Starts Here!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            From Myanmar to Korea - we&apos;ve helped hundreds of students like you achieve amazing results! 
            Whether you&apos;re planning to study at Seoul National University, work at Samsung, or explore Korean culture, 
            your success story begins with a single step. Take that step today with our free consultation!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              href="/enroll"
              className="group bg-white text-cherry-600 hover:bg-cherry-50"
            >
              Enroll Now
              <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-6 text-white">
              <a href="tel:+95977467785" className="flex items-center space-x-2 hover:text-cherry-200 transition-colors">
                <FaPhone className="w-5 h-5" />
                <span>+95 9774677855</span>
              </a>
              <a href="mailto:hangulwithus@gmail.com" className="flex items-center space-x-2 hover:text-cherry-200 transition-colors">
                <FaEnvelope className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-white/90">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Flexible</div>
              <div className="text-white/90">Schedule</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Certificate</div>
              <div className="text-white/90">Upon Completion</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;