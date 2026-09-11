import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...\n');

  // Clear existing data
  console.log('Clearing existing data...');
  await prisma.submission.deleteMany({});
  await prisma.bounty.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('✓ Cleared existing data\n');

  // Create 5 users (students) with exactly the data from the spec
  console.log('Creating 5 students...');
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Aditi Sharma',
        institute: 'IIT Bombay',
        gpa: 9.1,
        anonymousId: 'K7X2P',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Karan Verma',
        institute: 'Delhi Technological University',
        gpa: 8.6,
        anonymousId: 'M4Q9L',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Meera Iyer',
        institute: 'NIT Trichy',
        gpa: 8.0,
        anonymousId: 'R1T6W',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Sana Sheikh',
        institute: 'Private Engineering College, Indore',
        gpa: 7.2,
        anonymousId: 'V8D3Z',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Ravi Kumar',
        institute: 'Government Polytechnic, Bhopal',
        gpa: 6.4,
        anonymousId: 'N5H0C',
      },
    }),
  ]);

  console.log(`✓ Created ${users.length} students:`);
  users.forEach((user) => {
    console.log(
      `  - ${user.name} (${user.institute}, GPA: ${user.gpa}, ID: ${user.anonymousId})`
    );
  });
  console.log('');

  // Create 3 AYUSH-themed bounties
  console.log('Creating 3 AYUSH-themed bounties...');
  const bounties = await Promise.all([
    prisma.bounty.create({
      data: {
        title: 'Design a Patient Wellness Dashboard for a Panchakarma Clinic',
        company: 'Amrita Ayush Wellness Center',
        description:
          'Design a comprehensive patient wellness tracking system for a Panchakarma clinic. The dashboard should track patient vitals, treatment protocols, session history, and wellness progress over time. Must demonstrate understanding of Panchakarma procedures and patient documentation standards.',
        requiredSkills: ['Panchakarma Protocol', 'Patient Documentation', 'Wellness Tracking'],
      },
    }),
    prisma.bounty.create({
      data: {
        title: 'Develop a Yoga Therapy Plan for Workplace Stress Management',
        company: 'Prana Wellness Retreats',
        description:
          'Create a structured yoga therapy program designed for corporate wellness. The plan should include detailed session planning, breathing techniques (pranayama), and stress management strategies suitable for workplace environments. Must demonstrate practical knowledge of yoga therapy applications.',
        requiredSkills: ['Yoga Therapy', 'Session Planning', 'Breathing Techniques', 'Stress Management'],
      },
    }),
    prisma.bounty.create({
      data: {
        title: 'Compile a Medicinal Plant Reference Guide for a Community Herbal Garden',
        company: 'Sanjivani Herbal Foundation',
        description:
          'Develop a comprehensive reference guide for medicinal plants in a community herbal garden. The guide should include plant identification, Ayurvedic properties, preparation methods, and documentation of traditional uses. Must demonstrate knowledge of Ayurvedic pharmacology principles.',
        requiredSkills: ['Medicinal Plant Identification', 'Ayurvedic Pharmacology', 'Documentation'],
      },
    }),
  ]);

  console.log(`✓ Created ${bounties.length} AYUSH-themed bounties:`);
  bounties.forEach((bounty) => {
    console.log(`  - ${bounty.title}`);
    console.log(`    Company: ${bounty.company}`);
    console.log(`    Skills: ${bounty.requiredSkills.join(', ')}`);
  });
  console.log('');

  console.log('✅ Seed completed successfully!');
  console.log(`\nDatabase now contains:`);
  console.log(`  • ${users.length} students`);
  console.log(`  • ${bounties.length} AYUSH-themed bounties`);
  console.log(`  • 0 submissions (will be added in the next step)`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
