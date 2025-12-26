import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft } from 'react-icons/fa';
import { mockCourses } from '@/data/mockData';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = mockCourses.find(c => c.id === courseId);

  if (!course) {
    return (
      <>
        <Helmet>
          <title>Course Not Found - Korean With Us</title>
        </Helmet>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
            <button
              onClick={() => navigate('/student/courses')}
              className="text-[#ec8da5] hover:underline"
            >
              Back to My Courses
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.title} - Korean With Us</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/student/courses')}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#ec8da5] mb-6 transition-colors"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span>Back to My Courses</span>
          </button>

          {/* Course Content Placeholder */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>
            <p className="text-gray-500 text-sm">Course detail page - Coming soon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;

