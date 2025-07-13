import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = await context.params; // ⬅️ Avoid destructuring in the signature
  const teacherId = parseInt(id);
  const transfers = await storage.getTransfersByTeacher(teacherId);
  return NextResponse.json(transfers);
}
