import dbConnect from '@/lib/db';

import Note from '@/models/Note';

import { NextResponse } from 'next/server';

export async function POST(request) {
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
