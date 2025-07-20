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
  balance: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
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
  createdAt: Date | null;
  updatedAt: Date | null;
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
  value: string;
  teacherId: number | null;
  createdAt: Date | null;
  date: Date; // ✅ Add this if it makes sense
}
export interface InsertActivity {
  teacherId: number;
  value: string;
}
