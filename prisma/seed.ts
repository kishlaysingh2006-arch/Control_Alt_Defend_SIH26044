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

  // Create 3 bounties with exactly the data from the spec
  console.log('Creating 3 bounties...');
  const bounties = await Promise.all([
    prisma.bounty.create({
      data: {
        title: 'Build a REST API for a Task Tracker',
        company: 'Northwind Labs',
        description:
          'Create a RESTful API for a task management system with CRUD operations, user authentication, and PostgreSQL persistence. The API should follow REST design principles and use Express middleware for validation.',
        requiredSkills: ['Node', 'Express', 'PostgreSQL', 'REST API design'],
      },
    }),
    prisma.bounty.create({
      data: {
        title: 'Build a Data Visualization Dashboard',
        company: 'Vertex Analytics',
        description:
          'Build an interactive dashboard using React and D3.js to visualize complex datasets. The dashboard should support real-time data updates, filtering, and multiple chart types.',
        requiredSkills: ['React', 'D3.js', 'Data Visualization'],
      },
    }),
    prisma.bounty.create({
      data: {
        title: 'Write Automated Tests for a Checkout Flow',
        company: 'BluePeak Systems',
        description:
          'Develop comprehensive automated tests for an e-commerce checkout flow using Jest and modern JavaScript testing practices. Include unit tests, integration tests, and proper mocking strategies.',
        requiredSkills: ['JavaScript', 'Jest', 'Test Automation'],
      },
    }),
  ]);

  console.log(`✓ Created ${bounties.length} bounties:`);
  bounties.forEach((bounty) => {
    console.log(`  - ${bounty.title} by ${bounty.company}`);
    console.log(`    Skills: ${bounty.requiredSkills.join(', ')}`);
  });
  console.log('');

  console.log('✅ Seed completed successfully!');
  console.log(`\nDatabase now contains:`);
  console.log(`  • ${users.length} students`);
  console.log(`  • ${bounties.length} bounties`);
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
