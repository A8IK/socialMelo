/* eslint-disable no-console */
require('dotenv').config();
const nodemailer = require('nodemailer');

(async () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, ADMIN_NOTIFICATION_EMAIL } = process.env;

  console.log('--- SMTP env presence ---');
  console.log('SMTP_HOST :', SMTP_HOST || '(missing)');
  console.log('SMTP_PORT :', SMTP_PORT || '(missing)');
  console.log('SMTP_USER :', SMTP_USER || '(missing)');
  console.log('SMTP_PASS :', SMTP_PASS ? `set (${SMTP_PASS.length} chars)` : '(missing)');
  console.log('SMTP_FROM :', SMTP_FROM || '(missing)');
  console.log('ADMIN     :', ADMIN_NOTIFICATION_EMAIL || '(missing)');
  console.log('-------------------------');

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Missing required SMTP_* env vars. Aborting.');
    process.exit(1);
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    logger: true,
    debug: true
  });

  try {
    console.log('\nVerifying SMTP connection…');
    await transporter.verify();
    console.log('✓ SMTP connection OK');
  } catch (err) {
    console.error('✗ SMTP verify failed:', err.message);
    if (err.code) console.error('  code:', err.code);
    if (err.command) console.error('  command:', err.command);
    if (err.response) console.error('  response:', err.response);
    process.exit(1);
  }

  const to = ADMIN_NOTIFICATION_EMAIL || SMTP_USER;
  try {
    console.log(`\nSending test message to ${to} …`);
    const info = await transporter.sendMail({
      from: SMTP_FROM || `SocialMelo <${SMTP_USER}>`,
      to,
      subject: '[SocialMelo] SMTP test',
      text: 'If you can read this, SMTP is working.',
      html: '<p>If you can read this, <strong>SMTP is working</strong>.</p>'
    });
    console.log('✓ Sent. messageId =', info.messageId);
    console.log('  response       =', info.response);
  } catch (err) {
    console.error('✗ Send failed:', err.message);
    if (err.code) console.error('  code:', err.code);
    if (err.response) console.error('  response:', err.response);
    process.exit(1);
  }
})();
