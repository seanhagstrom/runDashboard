// 'use strict';

const {
  db,
  models: { User },
} = require('../server/db');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ email: 'sean@sean.com', password: '123' }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log('seeded successfully');

  return {
    users: {
      sean: users[0],
    },
  };
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
