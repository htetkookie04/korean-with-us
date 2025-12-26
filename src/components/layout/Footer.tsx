import React from "react";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-cherry-50 to-cherry-100 border-t border-cherry-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-[#ec8da5] rounded-full flex items-center justify-center'>
                <img
                  src='/favicon.svg'
                  alt='Korean With Us'
                  className='w-6 h-6'
                />
              </div>
              <div className='flex flex-col'>
                <span className='font-heading font-bold text-gray-900 text-lg'>
                  Korean With Us
                </span>
                <span className='korean-text text-[#ec8da5] text-sm'>
                  한국어를 우리와 함께
                </span>
              </div>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Your trusted partner in learning Korean language and culture. Join
              our community of passionate learners and discover the beauty of
              Korea.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/share/17BJs4SwuG/?mibextid=wwXIfr'
                target='_blank'
                rel='noopener noreferrer'
                className='w-8 h-8 bg-[#ec8da5] rounded-full flex items-center justify-center text-white hover:bg-[#d97a92] transition-colors'
              >
                <FaFacebookF className='w-4 h-4' />
              </a>
              <a
                href='https://www.tiktok.com/@korean.with.us?_t=ZS-8znDQHYh7oe&_r=1'
                target='_blank'
                rel='noopener noreferrer'
                className='w-8 h-8 bg-[#ec8da5] rounded-full flex items-center justify-center text-white hover:bg-[#d97a92] transition-colors'
              >
                <FaTiktok className='w-4 h-4' />
              </a>
              <a
                href='https://www.youtube.com/@korean-with-us'
                target='_blank'
                rel='noopener noreferrer'
                className='w-8 h-8 bg-[#ec8da5] rounded-full flex items-center justify-center text-white hover:bg-[#d97a92] transition-colors'
              >
                <FaYoutube className='w-4 h-4' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='font-heading font-semibold text-gray-900 text-lg'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/courses'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href='/timetable'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  Timetable
                </Link>
              </li>
              <li>
                <Link
                  href='/gallery'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className='space-y-4'>
            <h3 className='font-heading font-semibold text-gray-900 text-lg'>
              Our Courses
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/courses/beginner'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  Beginner Classes
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/intermediate'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  Intermediate Classes
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/speaking-practice'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  Speaking Practice
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/topik-preparation'
                  className='text-gray-600 hover:text-[#ec8da5] transition-colors'
                >
                  TOPIK Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='font-heading font-semibold text-gray-900 text-lg'>
              Contact Us
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3 text-gray-600'>
                <FaMapMarkerAlt className='w-5 h-5 text-[#ec8da5]' />
                <span className='text-sm'>Yangon, Myanmar</span>
              </div>
              <div className='flex items-center space-x-3 text-gray-600'>
                <FaPhone className='w-5 h-5 text-[#ec8da5]' />
                <span className='text-sm'>+95 9774677855</span>
              </div>
              <div className='flex items-center space-x-3 text-gray-600'>
                <FaEnvelope className='w-5 h-5 text-[#ec8da5]' />
                <span className='text-sm'>hangulwithus@gmail.com</span>
              </div>
            </div>
            <Link
              href='/contact'
              className='inline-block bg-[#ec8da5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d97a92] transition-all duration-300 text-sm'
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-cherry-200 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-600 text-sm'>
              © 2024 Korean With Us. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link
                href='/privacy'
                className='text-gray-600 hover:text-[#ec8da5] transition-colors text-sm'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-gray-600 hover:text-[#ec8da5] transition-colors text-sm'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;