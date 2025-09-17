'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Clock, Users, MapPin, Calendar, Filter } from 'lucide-react';

export default function TimetablePage() {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');

  const courses = [
    { id: 'all', name: 'All Courses' },
    { id: 'beginner', name: 'Beginner Classes', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: 'Intermediate Classes', color: 'bg-blue-100 text-blue-800' },
    { id: 'speaking', name: 'Speaking Practice', color: 'bg-purple-100 text-purple-800' },
    { id: 'topik', name: 'TOPIK Preparation', color: 'bg-orange-100 text-orange-800' },
    { id: 'online', name: 'Online Classes', color: 'bg-cyan-100 text-cyan-800' },
    { id: 'kids', name: 'Kids Korean', color: 'bg-pink-100 text-pink-800' },
  ];

  const timeSlots = [
    { id: 'all', name: 'All Times' },
    { id: 'morning', name: 'Morning (8AM-12PM)' },
    { id: 'afternoon', name: 'Afternoon (1PM-5PM)' },
    { id: 'evening', name: 'Evening (6PM-8PM)' },
    { id: 'weekend', name: 'Weekend Only' },
  ];

  const schedule = [
    {
      day: 'Monday',
      classes: [
        {
          time: '9:00 AM - 11:00 AM',
          course: 'Beginner Level 1',
          type: 'beginner',
          teacher: 'Ms. Kim Soo-jin',
          room: 'Room A',
          students: '6/8',
          level: 'Basic',
        },
        {
          time: '2:00 PM - 4:00 PM',
          course: 'Intermediate Level 2',
          type: 'intermediate',
          teacher: 'Mr. Park Min-ho',
          room: 'Room B',
          students: '5/8',
          level: 'Intermediate',
        },
        {
          time: '6:30 PM - 8:00 PM',
          course: 'Speaking Practice',
          type: 'speaking',
          teacher: 'Ms. Lee Na-young',
          room: 'Room C',
          students: '4/6',
          level: 'All Levels',
        },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        {
          time: '10:00 AM - 12:00 PM',
          course: 'TOPIK Level 1-2',
          type: 'topik',
          teacher: 'Mr. Park Min-ho',
          room: 'Room A',
          students: '7/8',
          level: 'Beginner-Intermediate',
        },
        {
          time: '1:00 PM - 3:00 PM',
          course: 'Kids Korean (Age 6-10)',
          type: 'kids',
          teacher: 'Ms. Thant Zin',
          room: 'Kids Room',
          students: '8/10',
          level: 'Beginner',
        },
        {
          time: '7:00 PM - 8:30 PM',
          course: 'Online Beginner Class',
          type: 'online',
          teacher: 'Ms. Kim Soo-jin',
          room: 'Online',
          students: '12/15',
          level: 'Basic',
        },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        {
          time: '9:00 AM - 11:00 AM',
          course: 'Beginner Level 2',
          type: 'beginner',
          teacher: 'Ms. Lee Na-young',
          room: 'Room B',
          students: '6/8',
          level: 'Elementary',
        },
        {
          time: '2:30 PM - 4:30 PM',
          course: 'Business Korean',
          type: 'intermediate',
          teacher: 'Mr. Choi Jae-min',
          room: 'Room A',
          students: '4/6',
          level: 'Advanced',
        },
        {
          time: '6:30 PM - 8:00 PM',
          course: 'Conversational Korean',
          type: 'speaking',
          teacher: 'Ms. Kim Soo-jin',
          room: 'Room C',
          students: '5/8',
          level: 'Intermediate+',
        },
      ],
    },
    {
      day: 'Thursday',
      classes: [
        {
          time: '10:00 AM - 12:00 PM',
          course: 'TOPIK Level 3-4',
          type: 'topik',
          teacher: 'Mr. Park Min-ho',
          room: 'Room A',
          students: '6/8',
          level: 'Intermediate-Advanced',
        },
        {
          time: '3:00 PM - 5:00 PM',
          course: 'Kids Korean (Age 11-15)',
          type: 'kids',
          teacher: 'Ms. Thant Zin',
          room: 'Kids Room',
          students: '6/8',
          level: 'Elementary',
        },
        {
          time: '7:00 PM - 8:30 PM',
          course: 'Online Speaking Practice',
          type: 'online',
          teacher: 'Ms. Lee Na-young',
          room: 'Online',
          students: '8/12',
          level: 'All Levels',
        },
      ],
    },
    {
      day: 'Friday',
      classes: [
        {
          time: '9:00 AM - 11:00 AM',
          course: 'Intermediate Level 3',
          type: 'intermediate',
          teacher: 'Mr. Choi Jae-min',
          room: 'Room B',
          students: '7/8',
          level: 'Upper-Intermediate',
        },
        {
          time: '2:00 PM - 4:00 PM',
          course: 'Cultural Korean',
          type: 'speaking',
          teacher: 'Ms. Kim Soo-jin',
          room: 'Room C',
          students: '5/8',
          level: 'Intermediate',
        },
        {
          time: '6:00 PM - 7:30 PM',
          course: 'TOPIK Writing Workshop',
          type: 'topik',
          teacher: 'Mr. Park Min-ho',
          room: 'Room A',
          students: '4/6',
          level: 'Advanced',
        },
      ],
    },
    {
      day: 'Saturday',
      classes: [
        {
          time: '9:00 AM - 12:00 PM',
          course: 'Weekend Intensive Beginner',
          type: 'beginner',
          teacher: 'Ms. Lee Na-young',
          room: 'Room A',
          students: '8/10',
          level: 'Intensive',
        },
        {
          time: '1:00 PM - 4:00 PM',
          course: 'Weekend Speaking Marathon',
          type: 'speaking',
          teacher: 'Ms. Kim Soo-jin',
          room: 'Room B',
          students: '6/8',
          level: 'All Levels',
        },
        {
          time: '10:00 AM - 12:00 PM',
          course: 'Family Korean Class',
          type: 'kids',
          teacher: 'Ms. Thant Zin',
          room: 'Room C',
          students: '10/12',
          level: 'Family',
        },
      ],
    },
    {
      day: 'Sunday',
      classes: [
        {
          time: '10:00 AM - 1:00 PM',
          course: 'TOPIK Mock Exam',
          type: 'topik',
          teacher: 'Mr. Park Min-ho',
          room: 'Room A',
          students: '12/15',
          level: 'All TOPIK Levels',
        },
        {
          time: '2:00 PM - 4:00 PM',
          course: 'Korean Culture Workshop',
          type: 'speaking',
          teacher: 'All Teachers',
          room: 'Main Hall',
          students: '20/25',
          level: 'Open to All',
        },
      ],
    },
  ];

  const getCourseStyle = (type: string) => {
    const course = courses.find(c => c.id === type);
    return course?.color || 'bg-gray-100 text-gray-800';
  };

  const getTimeCategory = (time: string) => {
    const hour = parseInt(time.split(':')[0]);
    if (hour >= 8 && hour < 12) return 'morning';
    if (hour >= 13 && hour < 17) return 'afternoon';
    if (hour >= 18) return 'evening';
    return 'other';
  };

  const isWeekend = (day: string) => day === 'Saturday' || day === 'Sunday';

  const filteredSchedule = schedule.map(day => ({
    ...day,
    classes: day.classes.filter(classItem => {
      const courseMatch = selectedCourse === 'all' || classItem.type === selectedCourse;
      const timeMatch = selectedTime === 'all' || 
        (selectedTime === 'weekend' && isWeekend(day.day)) ||
        (selectedTime !== 'weekend' && getTimeCategory(classItem.time) === selectedTime);
      return courseMatch && timeMatch;
    })
  }));

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cherry-50 via-white to-primary-50 py-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="cherry-blossom" style={{ top: '15%', left: '5%', animationDelay: '0s' }}></div>
          <div className="cherry-blossom" style={{ top: '35%', right: '10%', animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6"
            >
              Class <span className="text-cherry-600">Timetable</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Find the perfect class schedule that fits your lifestyle. We offer flexible timing 
              options from morning to evening, including weekend intensive courses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="korean-text text-3xl text-cherry-600 font-bold"
            >
              시간표를 확인하세요!
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mt-2"
            >
              Check our schedule!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-cherry-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter Classes:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Course Filter */}
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-transparent"
              >
                {courses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>

              {/* Time Filter */}
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-transparent"
              >
                {timeSlots.map(slot => (
                  <option key={slot.id} value={slot.id}>
                    {slot.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20 bg-gradient-to-b from-cherry-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            {filteredSchedule.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: dayIndex * 0.1 }}
                className="space-y-4"
              >
                {/* Day Header */}
                <div className={`text-center py-4 rounded-lg font-semibold ${
                  isWeekend(day.day) 
                    ? 'bg-cherry-100 text-cherry-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {day.day}
                </div>

                {/* Classes */}
                <div className="space-y-3">
                  {day.classes.length > 0 ? (
                    day.classes.map((classItem, classIndex) => (
                      <Card key={classIndex} className="p-4 hover:shadow-lg transition-shadow">
                        <div className="space-y-3">
                          {/* Course Title */}
                          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCourseStyle(classItem.type)}`}>
                            {classItem.course}
                          </div>

                          {/* Time */}
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{classItem.time}</span>
                          </div>

                          {/* Teacher */}
                          <div className="text-sm font-medium text-gray-900">
                            {classItem.teacher}
                          </div>

                          {/* Details */}
                          <div className="space-y-1 text-xs text-gray-600">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-3 h-3" />
                              <span>{classItem.room}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-3 h-3" />
                              <span>{classItem.students} students</span>
                            </div>
                            <div className="font-medium">
                              Level: {classItem.level}
                            </div>
                          </div>

                          {/* Action Button */}
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="w-full text-xs"
                            href="/contact"
                          >
                            Join Class
                          </Button>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No classes match your filter</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Important Schedule Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📅 Class Schedule</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Regular classes run Monday to Friday</li>
                  <li>• Weekend intensive courses available</li>
                  <li>• Online classes have flexible timing</li>
                  <li>• Holiday schedules may vary</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">⏰ Attendance Policy</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Please arrive 10 minutes early</li>
                  <li>• Make-up classes available for absences</li>
                  <li>• Notify us 24 hours in advance</li>
                  <li>• Late arrivals may disrupt the class</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">👥 Class Sizes</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Regular classes: Maximum 8 students</li>
                  <li>• Speaking practice: Maximum 6 students</li>
                  <li>• Kids classes: Maximum 10 students</li>
                  <li>• Online classes: Maximum 15 students</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📚 What to Bring</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Textbooks (provided by center)</li>
                  <li>• Notebook and writing materials</li>
                  <li>• Water bottle</li>
                  <li>• Positive attitude and enthusiasm!</li>
                </ul>
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
            Found Your Perfect Class?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Don&apos;t wait! Spaces fill up quickly. Contact us today to reserve your spot 
            and start your Korean language journey.
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
              Reserve Your Spot
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="/courses"
              className="border-white text-white hover:bg-white hover:text-cherry-600"
            >
              View Course Details
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}