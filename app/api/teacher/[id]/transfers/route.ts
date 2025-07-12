import { NextRequest, NextResponse } from 'next/server'
import { storage } from '@/lib/storage'

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const teacherId = parseInt(context.params.id )
    const transfers = await storage.getTransfersByTeacher(teacherId)
    return NextResponse.json(transfers)
  } catch (error) {
    console.error('Error fetching transfers:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}