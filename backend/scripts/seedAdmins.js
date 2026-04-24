require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const User = require('../models/User');

const ADMINS = [
  {
    name: process.env.ADMIN1_NAME || 'Admin One',
    email: process.env.ADMIN1_EMAIL,
    password: process.env.ADMIN1_PASSWORD
  },
  {
    name: process.env.ADMIN2_NAME || 'Admin Two',
    email: process.env.ADMIN2_EMAIL,
    password: process.env.ADMIN2_PASSWORD
  }
];

async function run() {
  const missing = ADMINS.flatMap((a, i) => {
    const missingFields = [];
    if (!a.email) missingFields.push(`ADMIN${i + 1}_EMAIL`);
    if (!a.password) missingFields.push(`ADMIN${i + 1}_PASSWORD`);
    return missingFields;
  });

  if (missing.length > 0) {
    console.error('Missing required env vars:', missing.join(', '));
    console.error('Set them in backend/.env before running this script.');
    process.exit(1);
  }

  await connectDB();

  for (const admin of ADMINS) {
    const email = admin.email.toLowerCase();
    const existing = await User.findOne({ email });

    if (existing) {
      if (existing.userType !== 'Admin') {
        existing.userType = 'Admin';
        existing.password = admin.password;
        await existing.save();
        console.log(`Upgraded existing user to Admin: ${email}`);
      } else if (process.env.FORCE_UPDATE === '1') {
        existing.password = admin.password;
        existing.name = admin.name;
        await existing.save();
        console.log(`Password reset for admin: ${email}`);
      } else {
        console.log(`Admin already exists (unchanged): ${email}  [set FORCE_UPDATE=1 to reset password]`);
      }
      continue;
    }

    await User.create({
      name: admin.name,
      email,
      password: admin.password,
      userType: 'Admin',
      isVerified: true
    });
    console.log(`Created admin: ${email}`);
  }

  await mongoose.disconnect();
  console.log('Done.');
}

run().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
