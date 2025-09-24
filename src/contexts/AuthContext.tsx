import React, { createContext, useContext, useState, useCallback } from 'react';

export type UserRole = 'student' | 'placement_officer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock login - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on email
      let mockUser: User;
      if (email.includes('admin')) {
        mockUser = { id: '1', name: 'Admin User', email, role: 'admin' };
      } else if (email.includes('placement')) {
        mockUser = { id: '2', name: 'Placement Officer', email, role: 'placement_officer', department: 'Career Services' };
      } else {
        mockUser = { id: '3', name: 'John Student', email, role: 'student', department: 'Computer Science' };
      }
      
      setUser(mockUser);
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async (userData: any) => {
    setLoading(true);
    try {
      // Mock signup - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: userData.role,
        department: userData.department,
      };
      
      setUser(newUser);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};