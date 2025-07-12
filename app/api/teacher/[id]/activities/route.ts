import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = await context; // ✅ await the context
  const teacherId = parseInt(params.id);
  const activities = await storage.getActivitiesByTeacher(teacherId);
  return NextResponse.json(activities);
}
