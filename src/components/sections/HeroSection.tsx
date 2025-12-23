'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cherry-50 via-white to-primary-50 overflow-hidden">
      {/* Cherry Blossom Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cherry-blossom" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
        <div className="cherry-blossom" style={{ top: '20%', right: '15%', animationDelay: '2s' }}></div>
        <div className="cherry-blossom" style={{ top: '60%', left: '5%', animationDelay: '4s' }}></div>
        <div className="cherry-blossom" style={{ top: '80%', right: '10%', animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-cherry-100 rounded-full text-cherry-700 text-sm font-semibold"
              >
                🌸 #1 Korean Language Center in Myanmar
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 leading-tight"
              >
                Learn Korean
                <br />
                <span className="bg-gradient-to-r from-cherry-500 to-primary-500 bg-clip-text text-transparent">
                  With Us
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="korean-text text-2xl text-cherry-600 font-medium"
              >
                한국어를 우리와 함께
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Welcome to Myanmar&apos;s premier Korean language center! Whether you dream of studying at a Korean university, 
              working for a K-company, or simply exploring the beautiful world of Korean culture, we&apos;re here to make your 
              dreams come true. 
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg text-gray-700 leading-relaxed max-w-lg mt-4"
            >
              Join our warm community of learners and discover why Korean language skills open doors to incredible 
              opportunities in education, career, and cultural understanding. Let&apos;s embark on this exciting journey together!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/enroll" size="lg" className="group">
                Enroll Now
                <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] bg-gradient-to-br from-cherry-200 to-primary-200 rounded-3xl overflow-hidden">
              {/* Placeholder for Korean cultural image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl animate-float">🏯</div>
                  <div className="korean-text text-4xl font-bold text-cherry-700">
                    한국어
                  </div>
                  <div className="text-lg text-gray-700">
                    Korean Language & Culture
                  </div>
                </div>
              </div>
              
              {/* Floating Korean Elements */}
              <div className="absolute top-10 left-10 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="korean-text text-2xl font-bold text-cherry-600">가</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="korean-text text-3xl font-bold text-primary-600">나</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-5 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="korean-text text-xl font-bold text-cherry-600">다</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;