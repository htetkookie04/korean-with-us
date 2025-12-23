export interface Course {
  id: string;
  category: 'Beginner' | 'Intermediate' | 'TOPIK' | 'Speaking' | 'Advanced';
  lectures: number;
  title: string;
  description: string;
  schedule: string;
}

export interface Enrollment {
  studentId: string;
  courseId: string;
  enrolledAt: string;
}

// Mock courses data matching the screenshot
export const mockCourses: Course[] = [
  {
    id: 'course_001',
    category: 'Beginner',
    lectures: 12,
    title: 'Korean Beginner Level 1',
    description: 'Introduction to Korean language basics including Hangul, greetings, and simple conversations.',
    schedule: 'Mon, Wed, Fri 10:00 AM',
  },
  {
    id: 'course_002',
    category: 'Intermediate',
    lectures: 8,
    title: 'Korean Intermediate Grammar',
    description: 'Advanced grammar patterns, complex sentence structures, and formal expressions for intermediate learners.',
    schedule: 'Tue, Thu 2:00 PM',
  },
  {
    id: 'course_003',
    category: 'TOPIK',
    lectures: 15,
    title: 'TOPIK Preparation Course',
    description: 'Comprehensive preparation for TOPIK I and II exams with practice tests and study materials.',
    schedule: 'Sat 9:00 AM',
  },
  {
    id: 'course_004',
    category: 'Speaking',
    lectures: 6,
    title: 'Korean Speaking Practice',
    description: 'Improve your speaking skills through conversations, role-play, and pronunciation exercises.',
    schedule: 'Mon, Wed 4:00 PM',
  },
  {
    id: 'course_005',
    category: 'Advanced',
    lectures: 10,
    title: 'Advanced Korean Literature',
    description: 'Explore Korean literature, poetry, and advanced reading comprehension for fluent speakers.',
    schedule: 'Fri 6:00 PM',
  },
  {
    id: 'course_006',
    category: 'Intermediate',
    lectures: 4,
    title: 'Business Korean',
    description: 'Professional Korean for business settings including formal language, email writing, and presentations.',
    schedule: 'Thu 7:00 PM',
  },
];

// Mock enrollments - student stu_001 is enrolled in some courses
export const mockEnrollments: Enrollment[] = [
  {
    studentId: 'stu_001',
    courseId: 'course_001',
    enrolledAt: '2024-01-15',
  },
  {
    studentId: 'stu_001',
    courseId: 'course_003',
    enrolledAt: '2024-01-20',
  },
  {
    studentId: 'stu_001',
    courseId: 'course_004',
    enrolledAt: '2024-02-01',
  },
];

// Helper function to get enrolled courses for a student
export function getEnrolledCourses(studentId: string): Course[] {
  const enrolledCourseIds = mockEnrollments
    .filter(e => e.studentId === studentId)
    .map(e => e.courseId);
  
  return mockCourses.filter(course => enrolledCourseIds.includes(course.id));
}

