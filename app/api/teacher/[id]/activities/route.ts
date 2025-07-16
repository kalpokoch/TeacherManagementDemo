import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';
import { RouteContextWithId } from '@/types/api';

export async function GET(
  req: NextRequest,
  context: RouteContextWithId
) {
  const { id } = context.params;
  const teacherId = parseInt(id);

  try {
    const activities = await storage.getActivitiesByTeacher(teacherId);
    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
