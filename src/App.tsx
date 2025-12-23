import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/auth/ProtectedRoute';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import TimetablePage from './pages/TimetablePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import EnrollPage from './pages/EnrollPage';
import LoginPage from './pages/LoginPage';
import StudentCoursesPage from './pages/StudentCoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/beginner" element={<CoursesPage />} />
          <Route path="/courses/intermediate" element={<CoursesPage />} />
          <Route path="/courses/speaking" element={<CoursesPage />} />
          <Route path="/courses/topik" element={<CoursesPage />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/student/courses"
            element={
              <ProtectedRoute>
                <StudentCoursesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/courses/:courseId"
            element={
              <ProtectedRoute>
                <CourseDetailPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

