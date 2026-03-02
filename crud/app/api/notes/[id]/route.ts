import dbConnect from '@/lib/db';

import Note from '@/models/Notes';
import { Types } from 'mongoose';

import { NextResponse, NextRequest } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: Types.ObjectId } },
) {
  try {
    const { id } = await params;

    const body = await request.json();
    const { title, content } = body;

    await dbConnect();

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content, updatedAt: new Date() },
      {
        returnDocument: 'after', // ✅ new replacement
        runValidators: true,
      },
    );

    if (!updatedNote) {
      return NextResponse.json(
        { success: false, error: 'Note not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedNote,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update note' },
      { status: 400 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;

    await dbConnect();

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return NextResponse.json(
        {
          success: false,
          error: 'Note not found',
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      data: {},
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error,
      },
      {
        status: 400,
      },
    );
  }
}
