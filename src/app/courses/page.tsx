"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  FaUsers,
  FaComments,
  FaAward,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaBook,
  FaGlobe,
} from "react-icons/fa";

type TabType = "all" | "beginner" | "intermediate" | "speaking" | "topik";

function CoursesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<TabType>("all");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      const validTabs: TabType[] = ["all", "beginner", "intermediate", "speaking", "topik"];
      if (validTabs.includes(tabParam as TabType)) {
        setActiveTab(tabParam as TabType);
      }
    }
  }, [searchParams]);

  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId);
    const newUrl = tabId === "all" ? pathname : `${pathname}?tab=${tabId}`;
    router.push(newUrl, { scroll: false });
  };
  const courses = [
    {
      id: "beginner",
      level: "beginner",
      icon: <FaBook className='w-8 h-8' />,
      title: "Beginner Korean",
      subtitle: "기초 한국어",
      duration: "3 months",
      sessions: "3 sessions/week",
      price: "120,000 MMK",
      description:
        "Perfect for absolute beginners with zero Korean knowledge. Start from Hangul alphabet and build solid foundations for confident communication in everyday situations.",
      whoIsItFor:
        "Complete beginners, Myanmar students planning to study in Korea, professionals interested in Korean culture, anyone starting their Korean language journey from scratch.",
      whatYouWillLearn:
        "Master Hangul reading and writing, understand basic grammar patterns, learn 500+ essential words, practice simple conversations, and gain cultural awareness for daily interactions.",
      expectedOutcomes:
        "Confidently read and write Hangul, introduce yourself in Korean, handle basic conversations (greetings, shopping, directions), understand simple Korean texts, and be ready for intermediate studies or Level 1.",
      features: [
        "Complete Hangul mastery in 4 weeks",
        "Essential grammar (은/는, 이/가, 을/를)",
        "500+ high-frequency vocabulary words",
        "Practical conversation skills",
        "Cultural context and etiquette",
        "Numbers, time, and dates",
        "Family and personal topics",
        "Confidence-building exercises",
      ],
      curriculum: [
        "Week 1-4: Hangul alphabet and pronunciation mastery",
        "Week 5-8: Basic grammar structures and sentence building",
        "Week 9-12: Vocabulary expansion and conversation practice",
      ],
      popular: false,
      difficulty: "Beginner",
      targetLevel: "Level 1",
    },
    {
      id: "beginner",
      level: "beginner",
      icon: <FaBook className='w-8 h-8' />,
      title: "Beginner Korean",
      subtitle: "기초 한국어",
      duration: "3 months",
      sessions: "3 sessions/week",
      price: "140,000 MMK",
      description:
        "Perfect for absolute beginners with zero Korean knowledge. Start from Hangul alphabet and build solid foundations for confident communication in everyday situations.",
      whoIsItFor:
        "Complete beginners, Myanmar students planning to study in Korea, professionals interested in Korean culture, anyone starting their Korean language journey from scratch.",
      whatYouWillLearn:
        "Master Hangul reading and writing, understand basic grammar patterns, learn 500+ essential words, practice simple conversations, and gain cultural awareness for daily interactions.",
      expectedOutcomes:
        "Confidently read and write Hangul, introduce yourself in Korean, handle basic conversations (greetings, shopping, directions), understand simple Korean texts, and be ready for intermediate studies or Level 2.",
      features: [
        "Complete Hangul mastery in 4 weeks",
        "Essential grammar (은/는, 이/가, 을/를)",
        "500+ high-frequency vocabulary words",
        "Practical conversation skills",
        "Cultural context and etiquette",
        "Numbers, time, and dates",
        "Family and personal topics",
        "Confidence-building exercises",
      ],
      curriculum: [
        "Week 1-4: Hangul alphabet and pronunciation mastery",
        "Week 5-8: Basic grammar structures and sentence building",
        "Week 9-12: Vocabulary expansion and conversation practice",
      ],
      popular: false,
      difficulty: "Beginner",
      targetLevel: "Level 2",
    },
    {
      id: "intermediate",
      level: "intermediate",
      icon: <FaUsers className='w-8 h-8' />,
      title: "Intermediate Korean",
      subtitle: "중급 한국어",
      duration: "4 months",
      sessions: "3 sessions/week",
      price: "180,000 MMK",
      description:
        "Bridge the gap from basic to fluent Korean. Master complex grammar, formal communication, and workplace Korean for academic and professional success.",
      whoIsItFor:
        "Students with basic Korean knowledge, university applicants needing intermediate skills, professionals working with Korean companies, learners preparing for Korean job markets.",
      whatYouWillLearn:
        "Advanced grammar patterns, formal and informal speech levels, business communication, academic writing, media comprehension, cultural nuances, and professional presentation skills.",
      expectedOutcomes:
        "Communicate confidently in workplace settings, understand Korean news and media, write formal emails and reports, navigate university environments, handle complex social situations, and achieve TOPIK Level 3.",
      features: [
        "Complex grammar patterns mastery",
        "Business and workplace Korean",
        "Formal vs informal speech levels",
        "Academic writing techniques",
        "Korean workplace culture",
        "Media and news comprehension",
        "Professional presentation skills",
        "Advanced conversation abilities",
      ],
      curriculum: [
        "Month 1: Advanced grammar and honorific systems",
        "Month 2: Business Korean and workplace communication",
        "Month 3: Media comprehension and academic writing",
        "Month 4: Professional presentations and complex discussions",
      ],
      popular: false,
      difficulty: "Intermediate",
      targetLevel: "Level 3",
    },
    {
      id: "intermediate",
      level: "intermediate",
      icon: <FaUsers className='w-8 h-8' />,
      title: "Intermediate Korean",
      subtitle: "중급 한국어",
      duration: "4 months",
      sessions: "3 sessions/week",
      price: "250,000 MMK",
      description:
        "Bridge the gap from basic to fluent Korean. Master complex grammar, formal communication, and workplace Korean for academic and professional success.",
      whoIsItFor:
        "Students with basic Korean knowledge, university applicants needing intermediate skills, professionals working with Korean companies, learners preparing for Korean job markets.",
      whatYouWillLearn:
        "Advanced grammar patterns, formal and informal speech levels, business communication, academic writing, media comprehension, cultural nuances, and professional presentation skills.",
      expectedOutcomes:
        "Communicate confidently in workplace settings, understand Korean news and media, write formal emails and reports, navigate university environments, handle complex social situations, and achieve TOPIK Level 4.",
      features: [
        "Complex grammar patterns mastery",
        "Business and workplace Korean",
        "Formal vs informal speech levels",
        "Academic writing techniques",
        "Korean workplace culture",
        "Media and news comprehension",
        "Professional presentation skills",
        "Advanced conversation abilities",
      ],
      curriculum: [
        "Month 1: Advanced grammar and honorific systems",
        "Month 2: Business Korean and workplace communication",
        "Month 3: Media comprehension and academic writing",
        "Month 4: Professional presentations and complex discussions",
      ],
      popular: false,
      difficulty: "Intermediate",
      targetLevel: "Level 4",
    },
    {
      id: "speaking",
      level: "speaking",
      icon: <FaComments className='w-8 h-8' />,
      title: "Conversation & Speaking 1",
      subtitle: "한국어 회화",
      duration: "Ongoing",
      sessions: "2 sessions/week",
      price: "From 100000MMK",
      description:
        "Transform your Korean speaking skills with intensive practice sessions led by native speakers. Break through speaking barriers and gain natural fluency.",
      whoIsItFor:
        "Students wanting to improve speaking confidence, learners preparing for Korean interviews, anyone feeling shy about speaking Korean, professionals needing conversational fluency.",
      whatYouWillLearn:
        "Natural pronunciation, conversational flow, cultural communication styles, workplace discussions, social interactions, debate skills, and confident self-expression in various situations.",
      expectedOutcomes:
        "Speak Korean naturally and confidently, engage in spontaneous conversations, understand cultural communication nuances, handle job interviews and workplace discussions, and express complex ideas fluently.",
      features: [
        "Native Korean teacher guidance",
        "Small groups (maximum 6 students)",
        "Real-life conversation scenarios",
        "Pronunciation and accent training",
        "Cultural communication patterns",
        "Interactive role-playing",
        "Confidence-building techniques",
        "Personalized speaking feedback",
      ],
      curriculum: [
        "Week 1-2: Daily life conversations and natural expressions",
        "Week 3-4: Workplace and professional communication",
        "Week 5-6: Social situations and cultural discussions",
        "Week 7-8: Advanced topics and debate skills",
      ],
      popular: true,
      difficulty: "All Levels",
      targetLevel: "Fluency Focus",
    },
    
    {
      id: "speaking",
      level: "speaking",
      icon: <FaComments className='w-8 h-8' />,
      title: "Conversation & Speaking 2",
      subtitle: "한국어 회화",
      duration: "Ongoing",
      sessions: "2 sessions/week",
      price: "From 150000MMK",
      description:
        "Transform your Korean speaking skills with intensive practice sessions led by native speakers. Break through speaking barriers and gain natural fluency.",
      whoIsItFor:
        "Students wanting to improve speaking confidence, learners preparing for Korean interviews, anyone feeling shy about speaking Korean, professionals needing conversational fluency.",
      whatYouWillLearn:
        "Natural pronunciation, conversational flow, cultural communication styles, workplace discussions, social interactions, debate skills, and confident self-expression in various situations.",
      expectedOutcomes:
        "Speak Korean naturally and confidently, engage in spontaneous conversations, understand cultural communication nuances, handle job interviews and workplace discussions, and express complex ideas fluently.",
      features: [
        "Native Korean teacher guidance",
        "Small groups (maximum 6 students)",
        "Real-life conversation scenarios",
        "Pronunciation and accent training",
        "Cultural communication patterns",
        "Interactive role-playing",
        "Confidence-building techniques",
        "Personalized speaking feedback",
      ],
      curriculum: [
        "Week 1-2: Daily life conversations and natural expressions",
        "Week 3-4: Workplace and professional communication",
        "Week 5-6: Social situations and cultural discussions",
        "Week 7-8: Advanced topics and debate skills",
      ],
      popular: true,
      difficulty: "All Levels",
      targetLevel: "Fluency Focus",
    },
    {
      id: "topik",
      level: "topik",
      icon: <FaAward className='w-8 h-8' />,
      title: "TOPIK 1 Preparation",
      subtitle: "TOPIK 시험 준비",
      duration: "2-3 months",
      sessions: "4 sessions/week",
      price: "80,000 MMK",
      description:
        "Achieve your target TOPIK score with our proven preparation program. Master test strategies, timing, and skills needed for university admission and visa applications.",
      whoIsItFor:
        "Students applying to Korean universities, visa applicants requiring TOPIK scores, professionals seeking Korean language certification, anyone needing official Korean proficiency proof.",
      whatYouWillLearn:
        "TOPIK test format and strategies, advanced reading comprehension, listening skills, essay writing (TOPIK II), grammar patterns, exam vocabulary, time management, and effective test-taking techniques.",
      expectedOutcomes:
        "Pass TOPIK with your target level, gain university admission qualification, meet visa requirements, achieve professional certification, and demonstrate official Korean proficiency for career advancement.",
      features: [
        "TOPIK I comprehensive prep",
        "Weekly mock exams with scoring",
        "Reading strategy techniques",
        "Listening comprehension mastery",
        "Grammar pattern drills",
        "Targeted vocabulary building",
        "Time management strategies",
      ],
      curriculum: [
        "Month 1: Test format mastery and foundational strategies",
        "Month 2: Intensive skill practice with weekly mock tests",
        "Month 3: Final preparation and full test simulations",
      ],
      popular: false,
      difficulty: "Test Prep",
      targetLevel: "TOPIK Level 1-2",
    },
    {
      id: "topik",
      level: "topik",
      icon: <FaAward className='w-8 h-8' />,
      title: "TOPIK 2 Preparation <br />(Level 3-4)",
      subtitle: "TOPIK 시험 준비",
      duration: "2-3 months",
      sessions: "4 sessions/week",
      price: "180,000 MMK",
      description:
        "Achieve your target TOPIK score with our proven preparation program. Master test strategies, timing, and skills needed for university admission and visa applications.",
      whoIsItFor:
        "Students applying to Korean universities, visa applicants requiring TOPIK scores, professionals seeking Korean language certification, anyone needing official Korean proficiency proof.",
      whatYouWillLearn:
        "TOPIK test format and strategies, advanced reading comprehension, listening skills, essay writing (TOPIK II), grammar patterns, exam vocabulary, time management, and effective test-taking techniques.",
      expectedOutcomes:
        "Pass TOPIK with your target level, gain university admission qualification, meet visa requirements, achieve professional certification, and demonstrate official Korean proficiency for career advancement.",
      features: [
        "TOPIK II comprehensive prep",
        "Weekly mock exams with scoring",
        "Reading strategy techniques",
        "Listening comprehension mastery",
        "Essay writing skills (TOPIK II)",
        "Grammar pattern drills",
        "Targeted vocabulary building",
        "Time management strategies",
      ],
      curriculum: [
        "Month 1: Test format mastery and foundational strategies",
        "Month 2: Intensive skill practice with weekly mock tests",
        "Month 3: Final preparation and full test simulations",
      ],
      popular: false,
      difficulty: "Test Prep",
      targetLevel: "TOPIK Level 3-4",
    },
    {
      id: "topik",
      level: "topik",
      icon: <FaAward className='w-8 h-8' />,
      title: "TOPIK 2 Preparation <br />(Level 5-6)",
      subtitle: "TOPIK 시험 준비",
      duration: "2-3 months",
      sessions: "4 sessions/week",
      price: "250,000 MMK",
      description:
        "Achieve your target TOPIK score with our proven preparation program. Master test strategies, timing, and skills needed for university admission and visa applications.",
      whoIsItFor:
        "Students applying to Korean universities, visa applicants requiring TOPIK scores, professionals seeking Korean language certification, anyone needing official Korean proficiency proof.",
      whatYouWillLearn:
        "TOPIK test format and strategies, advanced reading comprehension, listening skills, essay writing (TOPIK II), grammar patterns, exam vocabulary, time management, and effective test-taking techniques.",
      expectedOutcomes:
        "Pass TOPIK with your target level, gain university admission qualification, meet visa requirements, achieve professional certification, and demonstrate official Korean proficiency for career advancement.",
      features: [
        "TOPIK II comprehensive prep",
        "Weekly mock exams with scoring",
        "Reading strategy techniques",
        "Listening comprehension mastery",
        "Essay writing skills (TOPIK II)",
        "Grammar pattern drills",
        "Targeted vocabulary building",
        "Time management strategies",
      ],
      curriculum: [
        "Month 1: Test format mastery and foundational strategies",
        "Month 2: Intensive skill practice with weekly mock tests",
        "Month 3: Final preparation and full test simulations",
      ],
      popular: false,
      difficulty: "Test Prep",
      targetLevel: "TOPIK Level 5-6",
    },
  ];

  const tabs: { id: TabType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "speaking", label: "Speaking Practice" },
    { id: "topik", label: "Topik preparation" },
  ];

  const filteredCourses =
    activeTab === "all"
      ? courses
      : courses.filter((course) => course.level === activeTab);

  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-cherry-50 via-white to-primary-50 py-20'>
        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
          <div
            className='cherry-blossom'
            style={{ top: "15%", left: "10%", animationDelay: "0s" }}
          ></div>
          <div
            className='cherry-blossom'
            style={{ top: "25%", right: "15%", animationDelay: "1.5s" }}
          ></div>
          <div
            className='cherry-blossom'
            style={{ top: "60%", left: "5%", animationDelay: "3s" }}
          ></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6'
            >
              Korean <span className='text-[#ec8da5]'>Language Courses</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'
            >
              Comprehensive Korean language programs designed for Myanmar
              students and professionals. From beginner to advanced levels, we
              have the perfect course for your goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='korean-text text-3xl text-[#ec8da5] font-bold'
            >
              당신의 꿈을 이루어 드리겠습니다
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='text-gray-600 mt-2'
            >
              We will help you achieve your dreams
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className='py-8 bg-gradient-to-b from-cherry-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-2 md:gap-4'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-cherry-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className='py-20 bg-gradient-to-b from-cherry-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredCourses.map((course, index) => (
              <motion.div
                key={`${course.id}-${course.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 h-full relative ${
                    course.popular ? "ring-2 ring-cherry-400" : ""
                  }`}
                >
                  {course.popular && (
                    <div className='absolute -top-3 left-6'>
                      <span className='bg-[#ec8da5] text-white px-3 py-1 rounded-full text-sm font-semibold'>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className='flex flex-col h-full'>
                    {/* Course Header */}
                    <div className='flex items-start justify-between mb-6'>
                      <div className='flex items-center space-x-4'>
                        <div className='text-cherry-600'>{course.icon}</div>
                        <div>
                          <h3 className='text-2xl font-semibold text-gray-900 mb-1'>
                            {course.title.includes('<br />') ? (
                              <>
                                {course.title.split('<br />').map((part, idx, arr) => (
                                  <span key={idx}>
                                    {part}
                                    {idx < arr.length - 1 && <br />}
                                  </span>
                                ))}
                              </>
                            ) : (
                              course.title
                            )}
                          </h3>
                          <p className='korean-text text-cherry-600 font-medium'>
                            {course.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className='text-right'>
                        <div className='text-2xl font-bold text-gray-900'>
                          {course.price}
                        </div>
                        <div className='text-sm text-gray-500'>
                          {course.difficulty}
                        </div>
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className='grid grid-cols-2 gap-4 mb-6'>
                      <div className='flex items-center space-x-2 text-gray-600'>
                        <FaClock className='w-4 h-4' />
                        <span>{course.duration}</span>
                      </div>
                      <div className='flex items-center space-x-2 text-gray-600'>
                        <FaUsers className='w-4 h-4' />
                        <span>{course.sessions}</span>
                      </div>
                      <div className='flex items-center space-x-2 text-gray-600'>
                        <FaAward className='w-4 h-4' />
                        <span>{course.targetLevel}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className='text-gray-600 mb-6'>{course.description}</p>

                    {/* Course Details for main 4 courses */}
                    {course.whoIsItFor && (
                      <div className='mb-6'>
                        <h4 className='font-semibold text-gray-900 mb-2 flex items-center'>
                          <FaUsers className='w-4 h-4 text-cherry-500 mr-2' />
                          Who is this for?
                        </h4>
                        <p className='text-sm text-gray-600'>
                          {course.whoIsItFor}
                        </p>
                      </div>
                    )}

                    {course.whatYouWillLearn && (
                      <div className='mb-6'>
                        <h4 className='font-semibold text-gray-900 mb-2 flex items-center'>
                          <FaBook className='w-4 h-4 text-cherry-500 mr-2' />
                          What you&apos;ll learn:
                        </h4>
                        <p className='text-sm text-gray-600'>
                          {course.whatYouWillLearn}
                        </p>
                      </div>
                    )}

                    {course.expectedOutcomes && (
                      <div className='mb-6'>
                        <h4 className='font-semibold text-gray-900 mb-2 flex items-center'>
                          <FaAward className='w-4 h-4 text-cherry-500 mr-2' />
                          Expected outcomes:
                        </h4>
                        <p className='text-sm text-gray-600'>
                          {course.expectedOutcomes}
                        </p>
                      </div>
                    )}

                    {/* Features */}
                    <div className='mb-6 flex-grow'>
                      <h4 className='font-semibold text-gray-900 mb-3'>
                        What You&apos;ll Learn:
                      </h4>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {course.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-center space-x-2 text-sm text-gray-600'
                          >
                            <FaCheckCircle className='w-4 h-4 text-cherry-500 flex-shrink-0' />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {course.features.length > 6 && (
                        <div className='text-sm text-cherry-600 mt-2'>
                          +{course.features.length - 6} more features
                        </div>
                      )}
                    </div>

                    {/* Curriculum Preview */}
                    <div className='mb-6'>
                      <h4 className='font-semibold text-gray-900 mb-3'>
                        Course Structure:
                      </h4>
                      <div className='space-y-2'>
                        {course.curriculum.map((item, idx) => (
                          <div
                            key={idx}
                            className='text-sm text-gray-600 flex items-start space-x-2'
                          >
                            <div className='w-2 h-2 bg-cherry-400 rounded-full mt-2 flex-shrink-0'></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className='mt-auto'>
                      <Button
                        variant={course.popular ? "primary" : "outline"}
                        className='w-full mb-3'
                        href='/contact'
                      >
                        Enroll Now
                      </Button>
                      <Button
                        variant='secondary'
                        className='w-full bg-gray-50 text-gray-700 hover:bg-gray-100'
                        href='/timetable'
                      >
                        View Schedule
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'
            >
              Why Choose <span className='text-cherry-600'>Our Courses</span>?
            </motion.h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='p-6 text-center'>
              <div className='text-5xl mb-4'>🎯</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Proven Results
              </h3>
              <p className='text-gray-600'>
                98% of our students achieve their target TOPIK levels
              </p>
            </Card>

            <Card className='p-6 text-center'>
              <div className='text-5xl mb-4'>👥</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Small Classes
              </h3>
              <p className='text-gray-600'>
                Maximum 8 students per class for personalized attention
              </p>
            </Card>

            <Card className='p-6 text-center'>
              <div className='text-5xl mb-4'>🏆</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                Expert Teachers
              </h3>
              <p className='text-gray-600'>
                Native Korean speakers and certified instructors
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-cherry-500 to-primary-500'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-heading font-bold text-white mb-6'
          >
            Start Your Korean Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-white/90 mb-8'
          >
            Join hundreds of successful students who have achieved their Korean
            language goals with us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Button
              variant='secondary'
              size='lg'
              href='/contact'
              className='bg-white text-cherry-600 hover:bg-gray-50'
            >
              Get Free Consultation
            </Button>
            <Button
              variant='outline'
              size='lg'
              href='/timetable'
              className='border-white text-white hover:bg-white hover:text-cherry-600'
            >
              View Class Schedule
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading courses...</div>
      </div>
    }>
      <CoursesPageContent />
    </Suspense>
  );
}
