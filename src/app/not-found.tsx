'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { FaHome, FaSearch, FaBook, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cherry-50 via-white to-primary-50 flex items-center justify-center relative overflow-hidden">
      {/* Cherry Blossom Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cherry-blossom" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
        <div className="cherry-blossom" style={{ top: '20%', right: '15%', animationDelay: '2s' }}></div>
        <div className="cherry-blossom" style={{ top: '70%', left: '5%', animationDelay: '4s' }}></div>
        <div className="cherry-blossom" style={{ top: '80%', right: '10%', animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* 404 Illustration */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-8xl md:text-9xl font-bold text-cherry-200 mb-4"
            >
              404
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="text-6xl animate-float">🌸</div>
            </motion.div>
          </div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Page Not Found
            </h1>
            <div className="korean-text text-2xl text-cherry-600 font-bold">
              페이지를 찾을 수 없습니다
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. 
              But don&apos;t worry, there are many other ways to continue your Korean learning journey!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/" size="lg" className="group">
              <FaHome className="w-5 h-5 mr-2" />
              Go Home
            </Button>
            <Button href="/courses" variant="outline" size="lg" className="group">
              <FaBook className="w-5 h-5 mr-2" />
              View Courses
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="group">
              <FaSearch className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pt-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-cherry-600">
              <a href="/about" className="hover:text-cherry-700 transition-colors">About Us</a>
              <span className="text-gray-300">•</span>
              <a href="/timetable" className="hover:text-cherry-700 transition-colors">Class Schedule</a>
              <span className="text-gray-300">•</span>
              <a href="/gallery" className="hover:text-cherry-700 transition-colors">Gallery</a>
              <span className="text-gray-300">•</span>
              <a href="/blog" className="hover:text-cherry-700 transition-colors">Learning Blog</a>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-gray-600 hover:text-cherry-600 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4 mr-2" />
              Go back to previous page
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}