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
    const teacher = await storage.getTeacher(teacherId);

    if (!teacher) {
      return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
    }

    return NextResponse.json(teacher);
  } catch (error) {
    console.error('Error fetching teacher:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
