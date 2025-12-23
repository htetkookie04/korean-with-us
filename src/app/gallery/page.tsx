'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaCamera, FaPlay, FaUsers, FaCalendar, FaAward, FaHeart, FaTimes } from 'react-icons/fa';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: 'image' | 'video';
  description: string;
  emoji: string;
  background: string;
  details: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos', icon: <FaCamera className="w-4 h-4" /> },
    { id: 'classes', name: 'Classes', icon: <FaUsers className="w-4 h-4" /> },
    { id: 'culture', name: 'Korean Culture', icon: <FaHeart className="w-4 h-4" /> },
    { id: 'events', name: 'Events', icon: <FaCalendar className="w-4 h-4" /> },
    { id: 'achievements', name: 'Achievements', icon: <FaAward className="w-4 h-4" /> },
    { id: 'videos', name: 'Videos', icon: <FaPlay className="w-4 h-4" /> },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Beginner Class in Session',
      category: 'classes',
      type: 'image',
      description: 'Students learning Hangul basics with Ms. Kim',
      emoji: '👩‍🏫',
      background: 'bg-gradient-to-br from-green-200 to-green-300',
      details: 'Our beginner students mastering the Korean alphabet with interactive learning methods.',
    },
    {
      id: 2,
      title: 'Korean Traditional Hanbok Day',
      category: 'culture',
      type: 'image',
      description: 'Students experiencing Korean traditional clothing',
      emoji: '👘',
      background: 'bg-gradient-to-br from-cherry-200 to-primary-200',
      details: 'Annual Hanbok Day where students learn about Korean traditional culture and clothing.',
    },
    {
      id: 3,
      title: 'TOPIK Success Celebration',
      category: 'achievements',
      type: 'image',
      description: '15 students passed TOPIK Level 4!',
      emoji: '🏆',
      background: 'bg-gradient-to-br from-yellow-200 to-orange-200',
      details: 'Celebrating our students who achieved excellent TOPIK results in the latest exam.',
    },
    {
      id: 4,
      title: 'Korean Cooking Workshop',
      category: 'events',
      type: 'image',
      description: 'Learning Korean culture through cuisine',
      emoji: '🍜',
      background: 'bg-gradient-to-br from-red-200 to-pink-200',
      details: 'Students learning to make Korean dishes while practicing language skills.',
    },
    {
      id: 5,
      title: 'Speaking Practice Session',
      category: 'classes',
      type: 'image',
      description: 'Conversational Korean with native speakers',
      emoji: '💬',
      background: 'bg-gradient-to-br from-purple-200 to-indigo-200',
      details: 'Weekly speaking sessions help students build confidence in real conversations.',
    },
    {
      id: 6,
      title: 'Cherry Blossom Festival',
      category: 'events',
      type: 'image',
      description: 'Celebrating spring Korean style',
      emoji: '🌸',
      background: 'bg-gradient-to-br from-pink-200 to-cherry-200',
      details: 'Our annual cherry blossom celebration with Korean games and activities.',
    },
    {
      id: 7,
      title: 'K-pop Dance Class',
      category: 'culture',
      type: 'video',
      description: 'Learning Korean through music and dance',
      emoji: '💃',
      background: 'bg-gradient-to-br from-cyan-200 to-blue-200',
      details: 'Fun K-pop dance sessions that help students learn Korean rhythm and pronunciation.',
    },
    {
      id: 8,
      title: 'Korean Calligraphy Workshop',
      category: 'culture',
      type: 'image',
      description: 'Traditional Korean writing art',
      emoji: '✍️',
      background: 'bg-gradient-to-br from-gray-200 to-slate-200',
      details: 'Students learning the beautiful art of Korean calligraphy and brush writing.',
    },
    {
      id: 9,
      title: 'University Admission Success',
      category: 'achievements',
      type: 'image',
      description: '8 students accepted to Korean universities',
      emoji: '🎓',
      background: 'bg-gradient-to-br from-emerald-200 to-teal-200',
      details: 'Proud moment as our students receive acceptance letters from Korean universities.',
    },
    {
      id: 10,
      title: 'Online Class Demo',
      category: 'classes',
      type: 'video',
      description: 'Interactive online learning platform',
      emoji: '💻',
      background: 'bg-gradient-to-br from-blue-200 to-indigo-200',
      details: 'See how our interactive online classes work with real-time teacher interaction.',
    },
    {
      id: 11,
      title: 'Korean Games Day',
      category: 'events',
      type: 'image',
      description: 'Traditional and modern Korean games',
      emoji: '🎮',
      background: 'bg-gradient-to-br from-amber-200 to-yellow-200',
      details: 'Fun day playing traditional Korean games while practicing language skills.',
    },
    {
      id: 12,
      title: 'Teacher Training Session',
      category: 'classes',
      type: 'image',
      description: 'Our expert teachers in action',
      emoji: '👨‍🏫',
      background: 'bg-gradient-to-br from-violet-200 to-purple-200',
      details: 'Behind the scenes: Our teachers preparing innovative lessons for students.',
    },
    {
      id: 13,
      title: 'Korean Language Olympiad',
      category: 'achievements',
      type: 'image',
      description: 'Competition winners with medals',
      emoji: '🥇',
      background: 'bg-gradient-to-br from-gold to-yellow-300',
      details: 'Our students winning medals at the national Korean Language Olympiad.',
    },
    {
      id: 14,
      title: 'Namsan Tower Virtual Tour',
      category: 'culture',
      type: 'video',
      description: 'Virtual visit to iconic Korean landmarks',
      emoji: '🗼',
      background: 'bg-gradient-to-br from-rose-200 to-pink-200',
      details: 'Virtual tour of Korean landmarks as part of our cultural education program.',
    },
    {
      id: 15,
      title: 'Student Testimonial Videos',
      category: 'achievements',
      type: 'video',
      description: 'Success stories from our graduates',
      emoji: '🎬',
      background: 'bg-gradient-to-br from-teal-200 to-cyan-200',
      details: 'Heartwarming testimonials from students who achieved their Korean language dreams.',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cherry-50 via-white to-primary-50 py-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="cherry-blossom" style={{ top: '10%', left: '8%', animationDelay: '0s' }}></div>
          <div className="cherry-blossom" style={{ top: '30%', right: '12%', animationDelay: '1.5s' }}></div>
          <div className="cherry-blossom" style={{ top: '60%', left: '5%', animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6"
            >
              Gallery & <span className="text-cherry-600">Memories</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Discover the vibrant learning community at Korean With Us through photos and videos 
              of our classes, cultural events, and student achievements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="korean-text text-3xl text-cherry-600 font-bold"
            >
              우리의 아름다운 추억들
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mt-2"
            >
              Our Beautiful Memories
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-cherry-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cherry-500 to-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-cherry-50 hover:text-cherry-600'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-cherry-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openModal(item)}
                className="cursor-pointer"
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`relative ${item.background} h-48 flex items-center justify-center`}>
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {item.emoji}
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-cherry-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">Try selecting a different category to see more content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
            >
              Our Journey in <span className="text-cherry-600">Numbers</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Photos Captured', icon: '📸' },
              { number: '50+', label: 'Cultural Events', icon: '🎭' },
              { number: '200+', label: 'Happy Moments', icon: '😊' },
              { number: '100+', label: 'Success Stories', icon: '🌟' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-gradient-to-b from-cherry-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
          >
            Featured: Center <span className="text-cherry-600">Tour Video</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Take a virtual tour of our modern facilities and see what makes Korean With Us special.
          </motion.p>
          
          <Card className="p-8">
            <div className="bg-gradient-to-br from-cherry-200 to-primary-200 rounded-lg h-64 md:h-80 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="text-8xl mb-4">🎬</div>
                <div className="text-2xl font-bold text-gray-700 mb-4">Center Tour Video</div>
                <Button size="lg" className="bg-white text-cherry-600 hover:bg-gray-50">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Tour
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cherry-500 to-primary-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Become Part of Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Join our vibrant learning community and create your own memorable moments 
            while mastering Korean language and culture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="secondary" 
              size="lg"
              href="/contact" 
              className="bg-white text-cherry-600 hover:bg-gray-50"
            >
              Join Our Community
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="/courses"
              className="border-white text-white hover:bg-white hover:text-cherry-600"
            >
              View Our Courses
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              
              <div className={`${selectedImage.background} rounded-lg h-64 flex items-center justify-center mb-4`}>
                <div className="text-8xl">{selectedImage.emoji}</div>
                {selectedImage.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 text-gray-800 hover:bg-white">
                      <Play className="w-6 h-6 mr-2" />
                      Play Video
                    </Button>
                  </div>
                )}
              </div>
              
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <p className="text-gray-800">{selectedImage.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}