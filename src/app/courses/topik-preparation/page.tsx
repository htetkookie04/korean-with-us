"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FaAward, FaClock, FaBullseye, FaCheckCircle } from "react-icons/fa";

const TOPIKPreparationPage = () => {
  return (
    <div className='min-h-screen pt-24 pb-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-b from-cherry-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-16'
          >
            <h1 className='text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6'>
              TOPIK Preparation Classes
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Comprehensive preparation for TOPIK I exams. Achieve your
              target score with expert guidance.
            </p>
            <div className='text-3xl font-bold text-cherry-600 mb-4'>
              From 80000 kyats
            </div>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Course Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className='p-8'>
                <div className='flex items-center mb-6'>
                  <FaAward className='w-8 h-8 text-cherry-600 mr-3' />
                  <h2 className='text-2xl font-bold text-gray-900'>
                    Course Overview
                  </h2>
                </div>

                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                      Duration & Schedule
                    </h3>
                    <div className='space-y-2'>
                      <div className='flex items-center'>
                        <FaClock className='w-5 h-5 text-cherry-600 mr-2' />
                        <span className='text-gray-600'>
                          3 months intensive
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <FaBullseye className='w-5 h-5 text-cherry-600 mr-2' />
                        <span className='text-gray-600'>
                          TOPIK I preparation
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <FaAward className='w-5 h-5 text-cherry-600 mr-2' />
                        <span className='text-gray-600'>98% pass rate</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                      What You&apos;ll Learn
                    </h3>
                    <ul className='space-y-2'>
                      {[
                        "Mock exams",
                        "Expert tips",
                        "All levels",
                        "High success rate",
                      ].map((feature, index) => (
                        <li key={index} className='flex items-center'>
                          <FaCheckCircle className='w-5 h-5 text-cherry-600 mr-2' />
                          <span className='text-gray-600'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                      Who It&apos;s For
                    </h3>
                    <p className='text-gray-600'>
                      Designed for students planning to study in Korea, apply
                      for jobs, or obtain Korean citizenship. Suitable for all
                      levels preparing for TOPIK I (Beginner) or TOPIK II
                      (Intermediate-Advanced).
                    </p>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                      Expected Outcomes
                    </h3>
                    <p className='text-gray-600'>
                      Achieve your target TOPIK score, master exam strategies,
                      improve all four language skills, and gain confidence for
                      official Korean language certification.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Enrollment Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className='p-8 bg-gradient-to-br from-cherry-50 to-primary-50'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Achieve Your TOPIK Goals
                </h2>
                <p className='text-gray-600 mb-6'>
                  Join our proven TOPIK preparation program and achieve the
                  score you need for your Korean dreams.
                </p>

                <div className='space-y-4'>
                  <Button
                    variant='primary'
                    size='lg'
                    className='w-full'
                    href='/contact'
                  >
                    Enroll Now
                  </Button>

                  <div className='text-center'>
                    <p className='text-sm text-gray-500 mb-2'>
                      Need more information?
                    </p>
                    <a
                      href='tel:+95977467785'
                      className='text-cherry-600 hover:text-cherry-700 font-medium'
                    >
                      Call +95 9774677855
                    </a>
                  </div>
                </div>
              </Card>

              {/* Course Features */}
              <Card className='p-6 mt-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Course Features
                </h3>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <FaCheckCircle className='w-5 h-5 text-cherry-600 mr-2 mt-0.5' />
                    <span className='text-gray-600'>
                      Weekly mock exams with detailed feedback
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle className='w-5 h-5 text-cherry-600 mr-2 mt-0.5' />
                    <span className='text-gray-600'>
                      Exam strategies and time management
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle className='w-5 h-5 text-cherry-600 mr-2 mt-0.5' />
                    <span className='text-gray-600'>
                      Intensive vocabulary and grammar review
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <FaCheckCircle className='w-5 h-5 text-cherry-600 mr-2 mt-0.5' />
                    <span className='text-gray-600'>
                      Reading and listening skill development
                    </span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TOPIKPreparationPage;
