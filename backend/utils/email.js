const nodemailer = require('nodemailer');

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
  return cachedTransporter;
}

async function sendMail({ to, subject, html, text }) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn(`[email] SMTP not configured — skipping email to ${to}`);
    return { skipped: true };
  }
  const from = process.env.SMTP_FROM || 'SocialMelo <noreply@socialmelo.com>';
  try {
    const info = await transporter.sendMail({ from, to, subject, html, text });
    return { skipped: false, messageId: info.messageId };
  } catch (err) {
    console.error('[email] send failed:', err.message);
    return { skipped: false, error: err.message };
  }
}

function welcomeEmailHtml(user) {
  const isBrand = user.userType === 'Join as Brand';
  const role = isBrand ? 'Brand' : 'Creator';
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
      <div style="background: linear-gradient(135deg, #3A1C71 0%, #D76D77 50%, #FFAF7B 100%); padding: 32px 24px; text-align: center; color: white;">
        <h1 style="margin: 0; font-size: 26px;">Welcome to SocialMelo, ${user.name}!</h1>
        <p style="margin: 8px 0 0; opacity: 0.95;">Your ${role} account is ready.</p>
      </div>
      <div style="padding: 28px 24px; line-height: 1.6;">
        <p>Hi ${user.name},</p>
        <p>Thank you for joining SocialMelo as a <strong>${role}</strong>. We're excited to help you ${isBrand ? 'discover and partner with the right creators' : 'connect with brands and grow your influence'}.</p>
        <p style="margin-top: 20px;"><strong>Next step:</strong> complete your profile so we can match you with the best ${isBrand ? 'creators' : 'brand opportunities'}.</p>
        <p style="margin-top: 24px;">If you have any questions, just reply to this email — we're here to help.</p>
        <p style="margin-top: 28px; color: #6b7280; font-size: 14px;">— The SocialMelo Team</p>
      </div>
    </div>
  `;
}

function adminNotificationHtml(user) {
  const role = user.userType;
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
      <h2 style="color: #3A1C71;">New ${role} signup on SocialMelo</h2>
      <table style="border-collapse: collapse; width: 100%; margin-top: 12px;">
        <tr><td style="padding: 6px 12px; font-weight: 600; background: #f3f4f6;">Name</td><td style="padding: 6px 12px;">${user.name}</td></tr>
        <tr><td style="padding: 6px 12px; font-weight: 600; background: #f3f4f6;">Email</td><td style="padding: 6px 12px;">${user.email}</td></tr>
        <tr><td style="padding: 6px 12px; font-weight: 600; background: #f3f4f6;">Role</td><td style="padding: 6px 12px;">${role}</td></tr>
        <tr><td style="padding: 6px 12px; font-weight: 600; background: #f3f4f6;">IP</td><td style="padding: 6px 12px;">${user.ipAddress || '—'}</td></tr>
        <tr><td style="padding: 6px 12px; font-weight: 600; background: #f3f4f6;">Registered</td><td style="padding: 6px 12px;">${new Date(user.createdAt || Date.now()).toLocaleString()}</td></tr>
      </table>
    </div>
  `;
}

function shortRole(userType) {
  if (userType === 'Join as Brand') return 'Brand';
  if (userType === 'Join as Creator') return 'Creator';
  return userType || 'User';
}

async function sendSignupEmails(user) {
  const role = shortRole(user.userType);
  const adminTo = process.env.ADMIN_NOTIFICATION_EMAIL || 'abdullah@socialmelo.com';

  await Promise.allSettled([
    sendMail({
      to: user.email,
      subject: `Greetings from SocialMelo, ${user.name}!`,
      html: welcomeEmailHtml(user),
      text: `Welcome to SocialMelo, ${user.name}! Your ${role} account is ready.`
    }),
    sendMail({
      to: adminTo,
      subject: `[SocialMelo] New ${role} signup — ${user.name}`,
      html: adminNotificationHtml(user),
      text: `${user.name} (${user.email}) just registered as a ${role}.`
    })
  ]);
}

module.exports = { sendMail, sendSignupEmails };
