import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaHeart, FaGlobe, FaBookOpen, FaStar } from 'react-icons/fa';

export default function AboutPage() {
  const values = [
    {
      icon: <FaBookOpen className="w-8 h-8" />,
      title: 'Beginner-Friendly',
      description: 'We start from the very basics, ensuring no one is left behind. Every concept is explained clearly and practiced thoroughly.',
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: 'Practical Learning',
      description: 'Every lesson focuses on real-world application. Learn Korean that you can immediately use in daily life and professional settings.',
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: 'Supportive Environment',
      description: 'Our caring teachers and encouraging classmates create a safe space where making mistakes is part of learning.',
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: 'Step-by-Step Progress',
      description: 'Structured curriculum that builds systematically from basic greetings to advanced conversation and professional communication.',
    },
  ];

  const team = [
    {
      name: 'Ms. Kim Soo-jin',
      role: 'Head Korean Instructor',
      image: '👩‍🏫',
      description: 'Native Korean speaker with 8+ years of teaching experience.',
      credentials: 'Seoul National University Graduate',
    },
    {
      name: 'Mr. Park Min-ho',
      role: 'TOPIK Specialist',
      image: '👨‍💼',
      description: 'TOPIK preparation expert helping students achieve their target scores.',
      credentials: 'TOPIK Level 6 Certified',
    },
    {
      name: 'Ms. Thant Zin',
      role: 'Cultural Coordinator',
      image: '👩‍💻',
      description: 'Myanmar-Korean cultural bridge, helping students adapt to Korean culture.',
      credentials: 'Korea University Exchange Graduate',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Graduated Students' },
    { number: '98%', label: 'TOPIK Pass Rate' },
    { number: '5+', label: 'Years of Excellence' },
    { number: '15+', label: 'Expert Teachers' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Korean With Us</title>
        <meta name="description" content="Learn about Korean With Us language center. Our mission, teaching approach, expert team, and achievements in helping Myanmar students master Korean." />
      </Helmet>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cherry-50 via-white to-primary-50 py-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="cherry-blossom" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
            <div className="cherry-blossom" style={{ top: '30%', right: '10%', animationDelay: '2s' }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6"
              >
                About <span className="text-cherry-600">Korean With Us</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              >
                Our mission is simple yet powerful: to help every Myanmar student master Korean language 
                step by step, building confidence and achieving real-world communication skills. We believe 
                that learning Korean should be accessible, practical, and enjoyable for everyone.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="korean-text text-3xl text-cherry-600 font-bold"
              >
                함께 배우고, 함께 성장하는 한국어 교육 센터
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                  Our Mission & Approach
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    At Korean With Us, we understand that learning a new language can feel overwhelming. 
                    That&apos;s why we&apos;ve developed a step-by-step approach that makes Korean accessible to everyone, 
                    regardless of your starting level or background.
                  </p>
                  <p>
                    Our teaching philosophy centers on three key principles: <strong>beginner-friendly instruction</strong>, 
                    <strong>practical application</strong>, and <strong>unwavering support</strong>. We start with the basics 
                    and gradually build your skills, ensuring you feel confident at every stage of your learning journey.
                  </p>
                  <p>
                    Every lesson is designed to be immediately useful in real-life situations. Whether you&apos;re 
                    planning to study in Korea, work for a Korean company, or simply explore Korean culture, 
                    our practical approach ensures you learn what you actually need to succeed.
                  </p>
                  <p>
                    Most importantly, you&apos;re never alone in this journey. Our supportive learning environment 
                    encourages questions, celebrates progress, and helps you overcome challenges with patience and understanding.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cherry-200 to-primary-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏫</div>
                    <div className="korean-text text-2xl font-bold text-cherry-700">교육의 힘</div>
                    <div className="text-gray-700 mt-2">The Power of Education</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learning Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
              >
                Your Korean <span className="text-cherry-600">Learning Journey</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                From complete beginner to confident Korean speaker - here&apos;s how we guide you every step of the way.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Foundation',
                  description: 'Master Hangul alphabet, basic greetings, and essential phrases for daily conversation.',
                  skills: ['Hangul reading & writing', 'Basic greetings', 'Numbers & time', 'Self-introduction'],
                  duration: '2-3 months'
                },
                {
                  step: '02', 
                  title: 'Growth',
                  description: 'Build vocabulary and grammar for practical situations like shopping, dining, and directions.',
                  skills: ['Present tense verbs', 'Family & relationships', 'Food & shopping', 'Transportation'],
                  duration: '3-4 months'
                },
                {
                  step: '03',
                  title: 'Flourishing', 
                  description: 'Develop conversational skills for work, study, and social interactions with confidence.',
                  skills: ['Past & future tenses', 'Workplace Korean', 'Formal vs informal', 'Cultural etiquette'],
                  duration: '4-6 months'
                },
                {
                  step: '04',
                  title: 'Mastery',
                  description: 'Achieve fluency for professional settings, university studies, and complex discussions.',
                  skills: ['Advanced grammar', 'Business Korean', 'Academic writing', 'TOPIK preparation'],
                  duration: '6+ months'
                }
              ].map((stage, index) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="p-6 h-full">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-cherry-500 text-white rounded-full text-xl font-bold mb-3">
                        {stage.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {stage.title}
                      </h3>
                      <div className="text-sm text-cherry-600 font-medium mb-3">
                        {stage.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">
                      {stage.description}
                    </p>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-gray-700 mb-2">Key Skills:</div>
                      {stage.skills.map((skill, i) => (
                        <div key={i} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-cherry-400 rounded-full mr-2"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </Card>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-cherry-300"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-cherry-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-cherry-50 to-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Personalized Learning Path
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Every student is unique. We assess your current level, understand your goals, and create a customized 
                  learning plan that fits your schedule and learning style. Whether you&apos;re preparing for university 
                  admission, job interviews, or personal enrichment, we adapt our curriculum to meet your specific needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-cherry-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
              >
                Our Teaching <span className="text-cherry-600">Approach</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                How we help Myanmar students master Korean language step by step, with confidence and support.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full">
                    <div className="text-cherry-600 mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
              >
                Meet Our <span className="text-cherry-600">Expert Team</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Our passionate educators bring years of experience and cultural expertise to help you succeed.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 text-center">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-cherry-600 font-semibold mb-3">
                      {member.role}
                    </div>
                    <p className="text-gray-600 mb-3">
                      {member.description}
                    </p>
                    <div className="text-sm text-gray-500 font-medium">
                      {member.credentials}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-to-r from-cherry-500 to-primary-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
              >
                Our Achievements
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 max-w-3xl mx-auto"
              >
                Numbers that reflect our commitment to student success.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/90 text-lg">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-cherry-50 to-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
            >
              Ready to Join Our <span className="text-cherry-600">Korean Family</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Take the first step towards mastering Korean language and culture. 
              Join hundreds of successful students who have achieved their dreams with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href="/contact" size="lg">
                Start Your Journey
              </Button>
              <Button href="/courses" variant="outline" size="lg">
                View Our Courses
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}


