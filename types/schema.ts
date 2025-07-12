export interface Teacher {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  avatar: string | null;
  earnings: string;
  activityAmount: string;
  projects: number;
  followers: number;
  following: number;
  createdAt: string;
  updatedAt: string;
}

export interface InsertTeacher {
  name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  avatar?: string | null;
  earnings: string;
  activityAmount: string;
  projects: number;
  followers: number;
  following: number;
}

export interface Transfer {
  id: number;
  teacherId: number;
  fromTo: string;
  amount: string;
  percentage: string;
  timestamp: string;
  type: 'from' | 'to';
  createdAt: string;
  updatedAt: string;
}

export interface InsertTransfer {
  teacherId: number;
  fromTo: string;
  amount: string;
  percentage: string;
  timestamp: string;
  type: 'from' | 'to';
}

export interface Activity {
  id: number;
  teacherId: number;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export interface InsertActivity {
  teacherId: number;
  value: string;
}