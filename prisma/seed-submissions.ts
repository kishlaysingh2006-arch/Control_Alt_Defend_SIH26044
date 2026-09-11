import { PrismaClient } from '@prisma/client';
import { scoreSubmission } from '../lib/scoring';

const prisma = new PrismaClient();

async function main() {
  console.log('🎯 Seeding AYUSH-themed engineered submissions for demo...\n');

  // Get the Yoga Therapy bounty
  const bounty = await prisma.bounty.findFirst({
    where: { title: 'Develop a Yoga Therapy Plan for Workplace Stress Management' },
  });

  if (!bounty) {
    throw new Error('Bounty "Develop a Yoga Therapy Plan for Workplace Stress Management" not found. Run npm run seed first.');
  }

  console.log(`📋 Bounty: ${bounty.title}`);
  console.log(`Company: ${bounty.company}`);
  console.log(`Required skills: ${bounty.requiredSkills.join(', ')}\n`);

  // Get all students
  const students = await prisma.user.findMany();
  const studentMap = new Map(students.map((s) => [s.name, s]));

  // Clear existing submissions for this bounty
  await prisma.submission.deleteMany({
    where: { bountyId: bounty.id },
  });

  // Define the 5 AYUSH-themed engineered submissions
  const submissions = [
    {
      studentName: 'Ravi Kumar',
      submissionText:
        'Designed a complete yoga therapy plan for corporate stress management, with structured session planning across a 7-day cycle and targeted breathing techniques such as Nadi Shodhana and Bhramari.',
      expectedScore: 100, // 4/4 skills: Yoga Therapy, Session Planning, Breathing Techniques, Stress Management
    },
    {
      studentName: 'Sana Sheikh',
      submissionText:
        'Developed a yoga therapy approach for stress management, with detailed session planning for a multi-day corporate wellness program.',
      expectedScore: 75, // 3/4 skills: Yoga Therapy, Session Planning, Stress Management (missing Breathing Techniques)
    },
    {
      studentName: 'Karan Verma',
      submissionText:
        'Focused on breathing techniques research for stress management applications in a general wellness context, without a formal instructional plan.',
      expectedScore: 50, // 2/4 skills: Breathing Techniques, Stress Management
    },
    {
      studentName: 'Meera Iyer',
      submissionText:
        'Outlined an initial yoga therapy concept along with basic session planning notes for general wellness clients.',
      expectedScore: 50, // 2/4 skills: Yoga Therapy, Session Planning
    },
    {
      studentName: 'Aditi Sharma',
      submissionText:
        'Focused on general stress management theory from a psychological perspective, without direct yoga instruction experience.',
      expectedScore: 25, // 1/4 skills: Stress Management only
    },
  ];

  console.log('Creating AYUSH-themed submissions and computing scores...\n');

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

  console.log('✅ AYUSH-themed engineered submissions created!\n');
  console.log('📊 Demo Punchline:');
  console.log('   Raw View (by pedigree): Aditi (IIT) → Karan (DTU) → Meera (NIT) → Sana → Ravi (Polytechnic)');
  console.log('   Blind View (by score):  Ravi (100%) → Sana (75%) → Karan/Meera (50%) → Aditi (25%)');
  console.log('');
  console.log('🎭 The reversal: Ravi jumps from LAST to FIRST. Aditi drops from FIRST to LAST.');
  console.log('');
  console.log('🏥 Context: AYUSH sector (Yoga Therapy for workplace wellness)');
}

main()
  .catch((e) => {
    console.error('❌ Seed submissions failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
