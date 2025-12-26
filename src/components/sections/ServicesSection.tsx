import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaUsers, FaComments, FaAward, FaClock } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaUsers className='w-8 h-8' />,
      title: "Beginner Classes",
      description:
        "Start your Korean journey with our structured beginner program. Learn Hangul, basic grammar, and essential vocabulary.",
      features: [
        "Hangul mastery",
        "Basic conversations",
        "Cultural basics",
        "Interactive lessons",
      ],
      price: "From 120000 kyats",
      href: "/courses/beginner",
    },
    {
      icon: <FaComments className='w-8 h-8' />,
      title: "Speaking Practice",
      description:
        "Improve your conversational skills with experienced speakers. Build confidence through real-world practice.",
      features: [
        "experienced speakers",
        "Small groups",
        "Real scenarios",
        "Pronunciation focus",
      ],
      price: "From 100000 kyats",
      href: "/courses/speaking-practice",
    },
    {
      icon: <FaAward className='w-8 h-8' />,
      title: "TOPIK Preparation",
      description:
        "Comprehensive preparation for TOPIK I & II exams. Achieve your target score with expert guidance.",
      features: [
        "Mock exams",
        "Expert tips",
        "All levels",
        "High success rate",
      ],
      price: "From 80000 kyats",
      href: "/courses/topik-preparation",
    },
    {
      icon: <FaClock className='w-8 h-8' />,
      title: "Intermediate Classes",
      description:
        "Advanced grammar, complex conversations, and business Korean. Perfect for career advancement.",
      features: [
        "Business Korean",
        "Advanced grammar",
        "Writing skills",
        "Cultural nuances",
      ],
      price: "From 180000 Kyats",
      href: "/courses/intermediate",
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-cherry-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4'
          >
            Our <span className='text-cherry-600'>Korean Courses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-600 max-w-3xl mx-auto'
          >
            Choose from our comprehensive range of Korean language programs
            designed for Myanmar students and professionals.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className='block h-full'>
                <Card className='p-6 h-full relative hover:shadow-lg transition-shadow cursor-pointer'>
                  <div className='flex flex-col h-full'>
                    <div className='text-cherry-600 mb-4'>{service.icon}</div>

                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      {service.title}
                    </h3>

                    <p className='text-gray-600 mb-4 flex-grow'>
                      {service.description}
                    </p>

                    <ul className='space-y-2 mb-6'>
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className='flex items-center text-sm text-gray-600'
                        >
                          <div className='w-2 h-2 bg-cherry-400 rounded-full mr-2'></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className='mt-auto'>
                      <div className='text-xl font-bold text-gray-900 mb-4'>
                        {service.price}
                      </div>
                      <Button
                        variant='outline'
                        className='w-full'
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
