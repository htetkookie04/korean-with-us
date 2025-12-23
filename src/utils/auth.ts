// Mock student account for testing
export const MOCK_STUDENT = {
  email: 'student@koreanwithus.com',
  password: 'Student@123',
  role: 'STUDENT' as const,
  studentId: 'stu_001',
  name: 'Aung Aung',
};

export interface StudentProfile {
  email: string;
  role: 'STUDENT';
  studentId: string;
  name: string;
}

const AUTH_TOKEN_KEY = 'korean_with_us_auth_token';
const STUDENT_PROFILE_KEY = 'korean_with_us_student_profile';

export const authService = {
  // Login function
  login(email: string, password: string): { success: boolean; error?: string } {
    if (email === MOCK_STUDENT.email && password === MOCK_STUDENT.password) {
      const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const profile: StudentProfile = {
        email: MOCK_STUDENT.email,
        role: MOCK_STUDENT.role,
        studentId: MOCK_STUDENT.studentId,
        name: MOCK_STUDENT.name,
      };
      
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(profile));
      
      return { success: true };
    }
    
    return { success: false, error: 'Invalid email or password' };
  },

  // Logout function
  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(STUDENT_PROFILE_KEY);
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  },

  // Get current student profile
  getStudentProfile(): StudentProfile | null {
    const profileStr = localStorage.getItem(STUDENT_PROFILE_KEY);
    if (profileStr) {
      try {
        return JSON.parse(profileStr) as StudentProfile;
      } catch {
        return null;
      }
    }
    return null;
  },

  // Get auth token
  getToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },
};

