import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Create transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, '<br/>')}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
} 