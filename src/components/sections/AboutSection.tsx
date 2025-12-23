import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-cherry-600">Korean With Us</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            🇰🇷 Korea offers incredible opportunities for Myanmar students - from world-class universities like Seoul National University 
            to innovative companies like Samsung and LG. Learning Korean opens doors to scholarships, career advancement, 
            and cultural experiences that will transform your future. Let us help you unlock these amazing possibilities!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <div className="text-5xl mb-4">👩‍🏫</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Native Korean Teachers</h3>
            <p className="text-gray-600">Learn from experienced native speakers who understand both Korean and Myanmar cultures, ensuring effective communication and learning</p>
          </Card>

          <Card className="p-8 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Success</h3>
            <p className="text-gray-600">98% TOPIK pass rate and 500+ successful students now studying and working in Korea - your dreams can become reality too!</p>
          </Card>

          <Card className="p-8 text-center">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cultural Immersion</h3>
            <p className="text-gray-600">Experience authentic Korean culture through festivals, cooking classes, and cultural activities that make learning fun and memorable</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;