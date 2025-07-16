// app/api/teacher/[id]/activities/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } } // ✅ Fixed: params is not a Promise
) {
  try {
    const { id } = context.params; // ✅ No need to await
    const teacherId = parseInt(id);
    const activities = await storage.getActivitiesByTeacher(teacherId);
    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
