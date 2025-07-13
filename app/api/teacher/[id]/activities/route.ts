import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // 👈 params might be a Promise
) {
  try {
    const { id } = await context.params; // 👈 await here
    const teacherId = parseInt(id);
    const activities = await storage.getActivitiesByTeacher(teacherId);
    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
