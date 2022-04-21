// 'use strict';

const {
  db,
  models: { User, Team },
} = require('../server/db');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ email: 'sean@sean.com', password: '123' }),
  ]);

  const teams = await Promise.all([
    Team.create({ name: `Haggie's Hooligans` }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${teams.length} teams`);
  console.log('seeded successfully');

  return {
    users: {
      sean: users[0],
    },
    teams,
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
