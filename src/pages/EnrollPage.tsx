import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBook, FaGraduationCap, FaCalendarAlt, FaCreditCard, FaStickyNote, FaCheckCircle, FaTimes } from 'react-icons/fa';

interface FullEnrollmentFormData {
  // Student Information
  name: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
  // Course Information
  courseName: string;
  courseLevel: string;
  // Enrollment Details
  preferredSchedule: string;
  paymentMethod: string;
  notes: string;
}

export default function EnrollPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get course info from URL params (in a real app, this would come from context/auth)
  const courseId = searchParams.get('courseId') || 'beginner';
  const defaultCourseName = searchParams.get('courseName') || 'Beginner Korean';
  const defaultCourseLevel = searchParams.get('courseLevel') || 'Beginner';

  const { register, handleSubmit, formState: { errors } } = useForm<FullEnrollmentFormData>({
    defaultValues: {
      name: '',
      birthday: '',
      email: '',
      phone: '',
      address: '',
      courseName: defaultCourseName || '',
      courseLevel: defaultCourseLevel || '',
      preferredSchedule: '',
      paymentMethod: '',
      notes: '',
    },
  });

  const courseOptions = [
    { value: 'Beginner Korean', level: 'Beginner' },
    { value: 'Intermediate Korean', level: 'Intermediate' },
    { value: 'Conversation & Speaking', level: 'All Levels' },
    { value: 'TOPIK Preparation', level: 'Intermediate' },
    { value: 'Business Korean', level: 'Intermediate' },
    { value: 'Private Tutoring', level: 'All Levels' },
  ];

  const levelOptions = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'All Levels',
  ];

  const scheduleOptions = [
    'Monday, Wednesday, Friday - 9:00 AM - 11:00 AM',
    'Monday, Wednesday, Friday - 2:00 PM - 4:00 PM',
    'Tuesday, Thursday, Saturday - 9:00 AM - 11:00 AM',
    'Tuesday, Thursday, Saturday - 2:00 PM - 4:00 PM',
    'Saturday Only - 9:00 AM - 12:00 PM',
    'Sunday Only - 9:00 AM - 12:00 PM',
    'Flexible Schedule (Contact Us)',
  ];

  const paymentMethods = [
    { value: 'cash', label: 'Cash Payment' },
    { value: 'bank_transfer', label: 'Bank Transfer' },
    { value: 'mobile_payment', label: 'Mobile Payment (KBZ Pay, Wave Pay)' },
    { value: 'installment', label: 'Monthly Installment' },
  ];

  const onSubmit = async (data: FullEnrollmentFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Enrollment submitted:', {
        studentInfo: {
          name: data.name,
          birthday: data.birthday,
          email: data.email,
          phone: data.phone,
          address: data.address,
        },
        courseInfo: { courseId, courseName: data.courseName, courseLevel: data.courseLevel },
        enrollmentDetails: {
          preferredSchedule: data.preferredSchedule,
          paymentMethod: data.paymentMethod,
          notes: data.notes,
        },
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Helmet>
        <title>Course Enrollment - Korean With Us</title>
        <meta name="description" content="Complete your enrollment for Korean language courses. Fill out your information and select your preferences." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-cherry-50 via-white to-primary-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Course <span className="text-cherry-600">Enrollment</span>
            </h1>
            <p className="text-xl text-gray-600">
              Complete your enrollment by reviewing your information and selecting your preferences
            </p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Student Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 !border-0" hover={false}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-cherry-100 rounded-full flex items-center justify-center">
                    <FaUser className="w-5 h-5 text-cherry-600" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">
                    Student Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaUser className="w-4 h-4 mr-2 text-cherry-600" />
                      Student Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Student name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-0 transition-colors"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaCalendarAlt className="w-4 h-4 mr-2 text-cherry-600" />
                      Birthday *
                    </label>
                    <input
                      type="date"
                      {...register('birthday', { required: 'Birthday is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-0 transition-colors"
                    />
                    {errors.birthday && (
                      <p className="text-red-500 text-sm mt-1">{errors.birthday.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaEnvelope className="w-4 h-4 mr-2 text-cherry-600" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email address is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-0 transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaPhone className="w-4 h-4 mr-2 text-cherry-600" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-0 transition-colors"
                      placeholder="+95 9 XXX XXX XXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-cherry-600" />
                      Address *
                    </label>
                    <input
                      type="text"
                      {...register('address', { required: 'Address is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-0 transition-colors"
                      placeholder="Enter your full address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Course Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 !border-0" hover={false}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaBook className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">
                    Course Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaBook className="w-4 h-4 mr-2 text-primary-600" />
                      Course Name *
                    </label>
                    <select
                      {...register('courseName', { required: 'Please select a course name' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-0 transition-colors"
                    >
                      <option value="">Select a course</option>
                      {courseOptions.map((course) => (
                        <option key={course.value} value={course.value}>
                          {course.value}
                        </option>
                      ))}
                    </select>
                    {errors.courseName && (
                      <p className="text-red-500 text-sm mt-1">{errors.courseName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaGraduationCap className="w-4 h-4 mr-2 text-primary-600" />
                      Course Level *
                    </label>
                    <select
                      {...register('courseLevel', { required: 'Please select a course level' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-0 transition-colors"
                    >
                      <option value="">Select a level</option>
                      {levelOptions.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.courseLevel && (
                      <p className="text-red-500 text-sm mt-1">{errors.courseLevel.message}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Enrollment Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 !border-0" hover={false}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-cherry-100 rounded-full flex items-center justify-center">
                    <FaCalendarAlt className="w-5 h-5 text-cherry-600" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">
                    Enrollment Details
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {/* Preferred Schedule */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaCalendarAlt className="w-4 h-4 mr-2 text-cherry-600" />
                      Preferred Schedule *
                    </label>
                    <select
                      {...register('preferredSchedule', { required: 'Please select a preferred schedule' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-0 transition-colors"
                    >
                      <option value="">Select your preferred schedule</option>
                      {scheduleOptions.map((schedule) => (
                        <option key={schedule} value={schedule}>
                          {schedule}
                        </option>
                      ))}
                    </select>
                    {errors.preferredSchedule && (
                      <p className="text-red-500 text-sm mt-1">{errors.preferredSchedule.message}</p>
                    )}
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <FaCreditCard className="w-4 h-4 mr-2 text-cherry-600" />
                      Payment Method *
                    </label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.value}
                          className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-cherry-50 focus-within:border-black cursor-pointer transition-colors"
                        >
                          <input
                            type="radio"
                            {...register('paymentMethod', { required: 'Please select a payment method' })}
                            value={method.value}
                            className="w-4 h-4 text-cherry-600 focus:ring-cherry-500 border-gray-300"
                          />
                          <span className="ml-3 text-gray-700 font-medium">{method.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.paymentMethod && (
                      <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
                    )}
                  </div>

                  {/* Notes / Remarks */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaStickyNote className="w-4 h-4 mr-2 text-cherry-600" />
                      Notes / Remarks
                    </label>
                    <textarea
                      {...register('notes')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cherry-500 focus:border-0 transition-colors resize-none"
                      placeholder="Any additional information, special requests, or questions you'd like to share..."
                    />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border-2 border-green-200 rounded-lg p-6"
              >
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Enrollment Submitted Successfully!
                    </h3>
                    <p className="text-green-800">
                      Thank you for enrolling! We&apos;ve received your enrollment request and will contact you within 24 hours to confirm your enrollment and provide further instructions.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-2 border-red-200 rounded-lg p-6"
              >
                <div className="flex items-start space-x-3">
                  <FaTimes className="w-6 h-6 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">
                      Enrollment Submission Failed
                    </h3>
                    <p className="text-red-800">
                      Sorry, there was an error submitting your enrollment. Please try again or contact us directly at hangulwithus@gmail.com or +95 9774677855.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancel}
                className="w-full sm:w-auto sm:min-w-[150px]"
              >
                <FaTimes className="w-4 h-4 mr-2" />
                Cancel / Back
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full sm:flex-1 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-black"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FaCheckCircle className="w-4 h-4 mr-2" />
                    Confirm Enrollment
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </>
  );
}

