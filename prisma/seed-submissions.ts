import { PrismaClient } from '@prisma/client';
import { scoreSubmission } from '../lib/scoring';

const prisma = new PrismaClient();

async function main() {
  console.log('🎯 Seeding engineered submissions for demo...\n');

  // Get the REST API bounty
  const bounty = await prisma.bounty.findFirst({
    where: { title: 'Build a REST API for a Task Tracker' },
  });

  if (!bounty) {
    throw new Error('Bounty "Build a REST API for a Task Tracker" not found. Run npm run seed first.');
  }

  console.log(`📋 Bounty: ${bounty.title}`);
  console.log(`Required skills: ${bounty.requiredSkills.join(', ')}\n`);

  // Get all students
  const students = await prisma.user.findMany();
  const studentMap = new Map(students.map((s) => [s.name, s]));

  // Clear existing submissions for this bounty
  await prisma.submission.deleteMany({
    where: { bountyId: bounty.id },
  });

  // Define the 5 engineered submissions with exact text from the spec
  const submissions = [
    {
      studentName: 'Ravi Kumar',
      submissionText:
        'Built a full REST API design using Node and Express, connected to a PostgreSQL database for persistent storage. Implemented CRUD endpoints with proper REST API design conventions, used Express middleware for validation, and Node async patterns for database calls to PostgreSQL.',
      expectedScore: 100, // 4/4 skills
    },
    {
      studentName: 'Sana Sheikh',
      submissionText:
        'Developed a Node backend using Express with clean REST API design principles for routing. The persistence layer was planned for a relational database but not fully implemented.',
      expectedScore: 75, // 3/4 skills: Node, Express, REST API design
    },
    {
      studentName: 'Karan Verma',
      submissionText:
        'Implemented database queries directly against PostgreSQL and designed the response formats to follow REST API design best practices.',
      expectedScore: 50, // 2/4 skills: PostgreSQL, REST API design
    },
    {
      studentName: 'Meera Iyer',
      submissionText:
        'Used Node for backend scripting, and structured the project using Express-inspired middleware patterns for clarity.',
      expectedScore: 50, // 2/4 skills: Node, Express
    },
    {
      studentName: 'Aditi Sharma',
      submissionText:
        'Focused primarily on the frontend React interface, with backend integration using PostgreSQL for storage via an ORM abstraction.',
      expectedScore: 25, // 1/4 skills: PostgreSQL
    },
  ];

  console.log('Creating submissions and computing scores...\n');

  for (const sub of submissions) {
    const student = studentMap.get(sub.studentName);
    if (!student) {
      console.error(`⚠️  Student ${sub.studentName} not found, skipping`);
      continue;
    }

    // Use the shared scoring function to compute score
    const { matchedSkills, heuristicScore } = scoreSubmission(
      sub.submissionText,
      bounty.requiredSkills
    );

    // Create the submission
    await prisma.submission.create({
      data: {
        bountyId: bounty.id,
        studentId: student.id,
        submissionText: sub.submissionText,
        matchedSkills,
        heuristicScore,
        shortlisted: false,
      },
    });

    // Verify the score matches expectations
    const status =
      heuristicScore === sub.expectedScore
        ? '✓'
        : `✗ (expected ${sub.expectedScore})`;

    console.log(`${status} ${sub.studentName}:`);
    console.log(`   Score: ${heuristicScore}% (${matchedSkills.length}/${bounty.requiredSkills.length} skills)`);
    console.log(`   Matched: ${matchedSkills.join(', ')}`);
    console.log(`   Institute: ${student.institute} (GPA: ${student.gpa})`);
    console.log('');
  }

  console.log('Engineered submissions created!\n');
  console.log('Demo Punchline:');
  console.log('   Raw View (by pedigree): Aditi (IIT) → Karan (DTU) → Meera (NIT) → Sana → Ravi (Polytechnic)');
  console.log('   Blind View (by score):  Ravi (100%) → Sana (75%) → Karan/Meera (50%) → Aditi (25%)');
  console.log('');
  console.log('The reversal: Ravi jumps from LAST to FIRST. Aditi drops from FIRST to LAST.');
}

main()
  .catch((e) => {
    console.error('Seed submissions failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
