"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Courses",
      href: "/courses",
      submenu: [
        { name: "Beginner Classes", href: "/courses?tab=beginner" },
        { name: "Intermediate Classes", href: "/courses?tab=intermediate" },
        { name: "Speaking Practice", href: "/courses?tab=speaking" },
        { name: "TOPIK Preparation", href: "/courses?tab=topik" },
      ],
    },
    { name: "Timetable", href: "/timetable" },
    { name: "Gallery", href: "/gallery" },
    
  ];

  return (
    <header className='bg-transparent py-4 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-6 py-3'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-[#ec8da5] rounded-full flex items-center justify-center'>
                <img
                  src='/favicon.svg'
                  alt='Korean With Us'
                  className='w-5 h-5'
                />
              </div>
              <div className='flex flex-col'>
                <span className='font-heading font-bold text-gray-900 text-base leading-tight'>
                  Korean With Us
                </span>
                <span className='korean-text text-[#ec8da5] text-xs'>
                  한국어를 우리와 함께
                </span>
              </div>
            </Link>

            <nav className='hidden lg:flex items-center space-x-6'>
              {navigation.map((item) => (
                <div key={item.name} className='relative group'>
                  {item.submenu ? (
                    <div
                      onMouseEnter={() => setIsCoursesOpen(true)}
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      <button className='flex items-center space-x-1 text-gray-700 hover:text-[#ec8da5] font-medium transition-colors px-3 py-2 rounded-full hover:bg-gray-50'>
                        <span>{item.name}</span>
                        <FaChevronDown className='w-4 h-4' />
                      </button>
                      <AnimatePresence>
                        {isCoursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className='absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2'
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className='block px-4 py-2 text-gray-700 hover:bg-[#ec8da5]/10 hover:text-[#ec8da5] transition-colors rounded-lg mx-2'
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className='text-gray-700 hover:text-[#ec8da5] font-medium transition-colors px-3 py-2 rounded-full hover:bg-gray-50'
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href='/contact'
                className='bg-[#ec8da5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d97a92] transition-all duration-300 shadow-md hover:shadow-lg text-sm'
              >
                Contact Us
              </Link>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='lg:hidden p-2 rounded-full text-gray-700 hover:text-[#ec8da5] hover:bg-gray-50 transition-colors'
            >
              {isMenuOpen ? (
                <FaTimes className='w-5 h-5' />
              ) : (
                <FaBars className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-white border-t border-cherry-100'
          >
            <div className='px-4 py-6 space-y-4'>
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className='block text-gray-700 hover:text-[#ec8da5] font-medium transition-colors'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className='ml-4 mt-2 space-y-2'>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className='block text-sm text-gray-600 hover:text-[#ec8da5] transition-colors'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href='/contact'
                className='block w-full bg-[#ec8da5] text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-[#d97a92] transition-all duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;