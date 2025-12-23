import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaBookOpen, FaPlay } from 'react-icons/fa';
import { authService } from '@/utils/auth';
import { getEnrolledCourses } from '@/data/mockData';
import type { Course } from '@/data/mockData';

const StudentCoursesPage: React.FC = () => {
  const navigate = useNavigate();
  const profile = authService.getStudentProfile();
  const enrolledCourses = profile ? getEnrolledCourses(profile.studentId) : [];

  const getCategoryColor = (category: Course['category']) => {
    switch (category) {
      case 'Beginner':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'TOPIK':
        return 'bg-blue-500';
      case 'Speaking':
        return 'bg-purple-500';
      case 'Advanced':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleOpenCourse = (courseId: string) => {
    navigate(`/student/courses/${courseId}`);
  };

  return (
    <>
      <Helmet>
        <title>My Courses - Korean With Us</title>
        <meta name="description" content="View your enrolled Korean language courses" />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-500 mb-2">My Courses</h1>
            <p className="text-gray-600">Welcome back, {profile?.name || 'Student'}!</p>
          </div>

          {/* Courses Grid */}
          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {enrolledCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Card Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Category and Lectures */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${getCategoryColor(course.category)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {course.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-300">
                        <FaPlay className="w-4 h-4" />
                        <span className="text-sm font-semibold">{course.lectures} Lectures</span>
                      </div>
                    </div>

                    {/* Book Icon with gradient background */}
                    <div className="flex justify-center mb-6 relative">
                      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-pink-50 to-transparent rounded-t-xl"></div>
                      <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                        <FaBookOpen className="w-16 h-16 text-pink-300" />
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-xl font-bold text-gray-500 mb-3">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {course.description}
                    </p>

                    {/* Schedule and Open Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <p className="text-gray-500 text-sm">
                        {course.schedule}
                      </p>
                      <button
                        onClick={() => handleOpenCourse(course.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
                      >
                        Open &gt;
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">You haven't enrolled in any courses yet.</p>
            </div>
          )}

          {/* Footer Text */}
          <div className="text-center text-gray-500 text-sm">
            Showing {enrolledCourses.length} of {enrolledCourses.length} courses
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCoursesPage;

