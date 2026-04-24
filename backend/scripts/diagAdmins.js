require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/database');
const User = require('../models/User');

async function run() {
  console.log('--- Admin diagnostics ---');
  console.log('ADMIN1_EMAIL in .env:', JSON.stringify(process.env.ADMIN1_EMAIL));
  console.log('ADMIN1_PASSWORD length in .env:', (process.env.ADMIN1_PASSWORD || '').length);
  console.log('ADMIN2_EMAIL in .env:', JSON.stringify(process.env.ADMIN2_EMAIL));
  console.log('ADMIN2_PASSWORD length in .env:', (process.env.ADMIN2_PASSWORD || '').length);
  console.log('---');

  await connectDB();

  const allAdmins = await User.find({ userType: 'Admin' }).select('+password').lean();
  console.log(`Admins in database: ${allAdmins.length}`);
  for (const a of allAdmins) {
    console.log('  -', a.email, '| name:', a.name, '| hasPassword:', !!a.password);
  }

  for (const envKey of ['ADMIN1', 'ADMIN2']) {
    const email = (process.env[`${envKey}_EMAIL`] || '').toLowerCase();
    const pw = process.env[`${envKey}_PASSWORD`] || '';
    if (!email || !pw) continue;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      console.log(`${envKey}: no user with email ${email}`);
      continue;
    }

    const match = user.password ? await bcrypt.compare(pw, user.password) : false;
    console.log(`${envKey}: email=${email} | userType=${user.userType} | passwordMatches=${match}`);
  }

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error('Diag failed:', err);
  process.exit(1);
});
