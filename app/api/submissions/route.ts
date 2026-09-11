import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scoreSubmission } from '@/lib/scoring';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bountyId, studentId, submissionText } = body;

    // Validate required fields
    if (!bountyId || !studentId || !submissionText) {
      return NextResponse.json(
        { error: 'Missing required fields: bountyId, studentId, submissionText' },
        { status: 400 }
      );
    }

    // Verify bounty exists and get required skills
    const bounty = await prisma.bounty.findUnique({
      where: { id: bountyId },
      select: { requiredSkills: true },
    });

    if (!bounty) {
      return NextResponse.json(
        { error: 'Bounty not found' },
        { status: 404 }
      );
    }

    // Verify student exists
    const student = await prisma.user.findUnique({
      where: { id: studentId },
      select: { id: true },
    });

    if (!student) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      );
    }

    // Score the submission using the shared scoring function
    const { matchedSkills, heuristicScore } = scoreSubmission(
      submissionText,
      bounty.requiredSkills
    );

    // Create the submission
    const submission = await prisma.submission.create({
      data: {
        bountyId,
        studentId,
        submissionText,
        matchedSkills,
        heuristicScore,
        shortlisted: false,
      },
      include: {
        student: {
          select: {
            name: true,
            anonymousId: true,
          },
        },
        bounty: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      submission: {
        id: submission.id,
        heuristicScore: submission.heuristicScore,
        matchedSkills: submission.matchedSkills,
        studentName: submission.student.name,
        bountyTitle: submission.bounty.title,
      },
      heuristicScore,
      matchedSkills,
    });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
