import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = await context.params;
  const teacherId = parseInt(id);
  const activities = await storage.getActivitiesByTeacher(teacherId);
  return NextResponse.json(activities);
}
