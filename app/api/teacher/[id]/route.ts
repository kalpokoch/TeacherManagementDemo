import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const teacherId = parseInt(params.id);
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
