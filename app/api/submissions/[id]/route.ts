import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { shortlisted } = body;

    if (typeof shortlisted !== 'boolean') {
      return NextResponse.json(
        { error: 'shortlisted must be a boolean' },
        { status: 400 }
      );
    }

    // Update the submission
    const submission = await prisma.submission.update({
      where: { id },
      data: { shortlisted },
      select: {
        id: true,
        shortlisted: true,
      },
    });

    return NextResponse.json({
      success: true,
      submission,
    });
  } catch (error) {
    console.error('Update submission error:', error);
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}
