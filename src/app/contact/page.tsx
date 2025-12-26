"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className='w-6 h-6' />,
      title: "Visit Our Center",
      details: [
        "Korean With Us Language Center",
        "Sanchaung,Yangon",
        "Myanmar",
      ],
    },
    {
      icon: <FaPhone className='w-6 h-6' />,
      title: "Call Us",
      details: [
        "+95 9774677855",
        "Available Mon-Sun, 9 AM - 6 PM",
        "Korean language inquiries",
      ],
    },
    {
      icon: <FaEnvelope className='w-6 h-6' />,
      title: "Email Us",
      details: [
        "hangulwithus@gmail.com",
        "Course inquiries welcome",
        "We reply within 24 hours",
      ],
    },
    {
      icon: <FaClock className='w-6 h-6' />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9 AM - 6 PM",
        "Saturday: 9 AM - 5 PM",
        "Sunday: 9AM - 5 PM",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF className='w-4 h-4' />,
      name: "Facebook",
      url: "https://www.facebook.com/share/17BJs4SwuG/?mibextid=wwXIfr",
    },
    {
      icon: <FaTiktok className='w-4 h-4' />,
      name: "TikTok",
      url: "https://www.tiktok.com/@korean.with.us?_t=ZS-8znDQHYh7oe&_r=1",
    },
    {
      icon: <FaYoutube className='w-4 h-4' />,
      name: "YouTube",
      url: "https://www.youtube.com/@korean-with-us",
    },
  ];

  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-cherry-50 via-white to-primary-50 py-20'>
        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
          <div
            className='cherry-blossom'
            style={{ top: "20%", left: "10%", animationDelay: "0s" }}
          ></div>
          <div
            className='cherry-blossom'
            style={{ top: "40%", right: "15%", animationDelay: "2s" }}
          ></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6'
            >
              Contact <span className='text-cherry-600'>Korean With Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'
            >
              We&apos;re here to help you take the first step towards mastering
              Korean! Whether you have questions about our courses, want to
              discuss enrollment options, or need information about class
              schedules, our friendly team is ready to assist you. Don&apos;t
              hesitate to reach out - we love hearing from future Korean
              speakers!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='korean-text text-3xl text-cherry-600 font-bold'
            >
              언제든지 연락주세요!
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='text-gray-600 mt-2'
            >
              Contact us anytime!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              {contactInfo.map((info) => (
                <Card key={info.title} className='p-6'>
                  <div className='flex items-start space-x-4'>
                    <div className='text-cherry-600 mt-1'>{info.icon}</div>
                    <div>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        {info.title}
                      </h3>
                      <div className='space-y-1'>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className='text-gray-600'>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Social Media */}
              <Card className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  Follow Us on Social Media
                </h3>
                <div className='flex space-x-4'>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 bg-[#ec8da5] rounded-full flex items-center justify-center text-white hover:bg-[#d97a92] transition-colors'
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className='text-gray-600 mt-4 text-sm'>
                  Stay updated with Korean learning tips, cultural insights, and
                  center news!
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-20 bg-gradient-to-b from-cherry-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'
            >
              Visit Our <span className='text-cherry-600'>Learning Center</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-xl text-gray-600 max-w-3xl mx-auto'
            >
              Located in the heart of Yangon, our modern facility provides the
              perfect environment for Korean language learning.
            </motion.p>
          </div>

          <Card className='p-8'>
            <div className='bg-gradient-to-br from-cherry-200 to-primary-200 rounded-lg h-96 flex items-center justify-center'>
              <div className='text-center'>
                <div className='text-6xl mb-4'>🗺️</div>
                <div className='text-2xl font-bold text-gray-700 mb-2'>
                  Interactive Map
                </div>
                <p className='text-gray-600'>
                  Downtown Yangon, Myanmar
                  <br />
                  Near Bogyoke Market
                </p>
                <div className='mt-4'>
                  <Button variant='outline' href='#'>
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Encouraging Message Section */}
      <section className='py-20 bg-gradient-to-r from-cherry-500 to-primary-500'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <div className='text-6xl mb-6'>🌸</div>
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-white mb-6'>
              We&apos;re Excited to Support Your Korean Learning Journey!
            </h2>
            <p className='text-xl text-white/90 leading-relaxed'>
              Every Korean language learner&apos;s journey is unique, and
              we&apos;re honored to be part of yours. From your very first
              &ldquo;안녕하세요&rdquo; (annyeonghaseyo) to achieving fluency,
              our dedicated team will be with you every step of the way. Your
              success is our success, and we can&apos;t wait to celebrate your
              achievements together!
            </p>
            <div className='korean-text text-2xl text-white font-bold mt-8'>
              함께 꿈을 이루어 나가요!
            </div>
            <p className='text-white/80'>
              Let&apos;s achieve your dreams together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'
            >
              Frequently Asked{" "}
              <span className='text-cherry-600'>Questions</span>
            </motion.h2>
          </div>

          <div className='space-y-6'>
            {[
              {
                question: "Do I need any prior Korean knowledge to start?",
                answer:
                  "Not at all! Our beginner courses are designed for complete beginners. We'll start with Hangul basics and build up your skills step by step.",
              },
              {
                question: "What's the class size?",
                answer:
                  "We keep our classes small with a maximum of 8 students to ensure personalized attention and maximum speaking practice for everyone.",
              },
              {
                question: "Do you offer online classes?",
                answer:
                  "Yes! We offer both in-person and online classes. Our online platform includes live sessions with teachers, interactive materials, and recorded lessons for review.",
              },
              {
                question:
                  "How long does it take to reach conversational level?",
                answer:
                  "With consistent study, most students reach basic conversational level in 6-8 months. However, this varies based on your study time, practice, and learning goals.",
              },
              {
                question: "Do you help with TOPIK exam registration?",
                answer:
                  "Absolutely! We provide complete support for TOPIK preparation and can assist you with exam registration, study materials, and test-taking strategies.",
              },
            ].map((faq, index) => (
              <Card key={index} className='p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                  {faq.question}
                </h3>
                <p className='text-gray-600'>{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
