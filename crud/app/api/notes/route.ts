import dbConnect from '@/lib/db';

import Note from '@/models/Notes';

import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const notes = await Note.find({});

    return NextResponse.json({
      success: true,
      data: notes,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred';
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      {
        status: 400,
      },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    const note = await Note.create(body);

    return NextResponse.json(
      {
        success: true,
        data: note,
      },

      {
        status: 201,
      },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred';
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      {
        status: 400,
      },
    );
  }
}
