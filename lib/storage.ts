import type { Teacher, Transfer, Activity, InsertTeacher, InsertTransfer, InsertActivity } from '@/types/schema'

export interface IStorage {
  // Teacher methods
  getTeacher(id: number): Promise<Teacher | undefined>;
  getTeacherByEmail(email: string): Promise<Teacher | undefined>;
  createTeacher(teacher: InsertTeacher): Promise<Teacher>;
  updateTeacher(id: number, teacher: Partial<InsertTeacher>): Promise<Teacher | undefined>;
  getAllTeachers(): Promise<Teacher[]>;
  
  // Transfer methods
  getTransfersByTeacher(teacherId: number): Promise<Transfer[]>;
  createTransfer(transfer: InsertTransfer): Promise<Transfer>;
  
  // Activity methods
  getActivitiesByTeacher(teacherId: number): Promise<Activity[]>;
  createActivity(activity: InsertActivity): Promise<Activity>;
}

export class MemStorage implements IStorage {
  private teachers: Map<number, Teacher>;
  private transfers: Map<number, Transfer>;
  private activities: Map<number, Activity>;
  private currentTeacherId: number;
  private currentTransferId: number;
  private currentActivityId: number;

  constructor() {
    this.teachers = new Map();
    this.transfers = new Map();
    this.activities = new Map();
    this.currentTeacherId = 1;
    this.currentTransferId = 1;
    this.currentActivityId = 1;
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Create sample teacher
    const teacher: Teacher = {
      id: 1,
      name: "Sarah Mitchell",
      email: "sarah@school.edu",
      phone: "+1 (555) 123-4567",
      address: "123 Education Lane, Learning City, LC 12345",
      avatar: null,
      earnings: "5,250",
      activityAmount: "2,100",
      balance: 3150,
      projects: 12,
      followers: 1234,
      following: 567,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.teachers.set(1, teacher);

    // Create sample transfers
    const transfers: Transfer[] = [
      {
        id: 1,
        teacherId: 1,
        fromTo: "From School District",
        amount: "2,500",
        percentage: "85",
        timestamp: "2 hours ago",
        type: "from",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        teacherId: 1,
        fromTo: "To Professional Development",
        amount: "450",
        percentage: "15",
        timestamp: "5 hours ago",
        type: "to",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        teacherId: 1,
        fromTo: "From Grant Funding",
        amount: "1,200",
        percentage: "65",
        timestamp: "1 day ago",
        type: "from",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    transfers.forEach(transfer => this.transfers.set(transfer.id, transfer));
    this.currentTransferId = transfers.length + 1;

    // Create sample activities
    const activities: Activity[] = [
      {
        id: 1,
        teacherId: 1,
        value: "20.50",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        teacherId: 1,
        value: "35.25",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        teacherId: 1,
        value: "28.75",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        teacherId: 1,
        value: "42.00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        teacherId: 1,
        value: "18.50",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        teacherId: 1,
        value: "31.25",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    activities.forEach(activity => this.activities.set(activity.id, activity));
    this.currentActivityId = activities.length + 1;
  }

  async getTeacher(id: number): Promise<Teacher | undefined> {
    return this.teachers.get(id);
  }

  async getTeacherByEmail(email: string): Promise<Teacher | undefined> {
    for (const teacher of this.teachers.values()) {
      if (teacher.email === email) {
        return teacher;
      }
    }
    return undefined;
  }

  async createTeacher(insertTeacher: InsertTeacher): Promise<Teacher> {
    const teacher: Teacher = {
      id: this.currentTeacherId++,
      ...insertTeacher,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.teachers.set(teacher.id, teacher);
    return teacher;
  }

  async updateTeacher(id: number, updateData: Partial<InsertTeacher>): Promise<Teacher | undefined> {
    const teacher = this.teachers.get(id);
    if (!teacher) {
      return undefined;
    }
    const updatedTeacher: Teacher = {
      ...teacher,
      ...updateData,
      updatedAt: new Date(),
    };
    this.teachers.set(id, updatedTeacher);
    return updatedTeacher;
  }

  async getAllTeachers(): Promise<Teacher[]> {
    return Array.from(this.teachers.values());
  }

  async getTransfersByTeacher(teacherId: number): Promise<Transfer[]> {
    return Array.from(this.transfers.values()).filter(transfer => transfer.teacherId === teacherId);
  }

  async createTransfer(insertTransfer: InsertTransfer): Promise<Transfer> {
    const transfer: Transfer = {
      id: this.currentTransferId++,
      ...insertTransfer,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.transfers.set(transfer.id, transfer);
    return transfer;
  }

  async getActivitiesByTeacher(teacherId: number): Promise<Activity[]> {
    return Array.from(this.activities.values()).filter(activity => activity.teacherId === teacherId);
  }

  async createActivity(insertActivity: InsertActivity): Promise<Activity> {
    const activity: Activity = {
      id: this.currentActivityId++,
      ...insertActivity,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.activities.set(activity.id, activity);
    return activity;
  }
}

export const storage = new MemStorage();