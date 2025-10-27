import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/lib/emails/ContactFormEmail';
import ConfirmationEmail from '@/lib/emails/ConfirmationEmail';

const resendAPIKey = process.env.RESEND_API_KEY || '';
const resend = resendAPIKey ? new Resend(resendAPIKey) : null;

// Valid email domains
const VALID_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'icloud.com',
  'protonmail.com',
  'live.com',
  'msn.com',
  'me.com',
  'mac.com',
  'aol.com',
  'zoho.com',
  'yandex.com',
  'mail.com',
  // Add more as needed
];

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate email format and domain
function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email || !EMAIL_REGEX.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  const domain = email.split('@')[1]?.toLowerCase();
  
  if (!domain) {
    return { valid: false, error: 'Invalid email format' };
  }

  if (!VALID_DOMAINS.includes(domain)) {
    return {
      valid: false,
      error: 'Please use a valid email provider (Gmail, Yahoo, Outlook, iCloud, etc.)',
    };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!resend || !resendAPIKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact directly at bikamanzi@gmail.com' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, service, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !service || !budget || !timeline) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { error: emailValidation.error },
        { status: 400 }
      );
    }

    // Get client IP for spam prevention
    const clientIP = request.headers.get('x-forwarded-for') || 'Unknown';
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Send email to you
    const { data: adminEmailData, error: adminError } = await resend.emails.send({
      from: 'Portfolio Contact Form <info@bilkamanzi.com>',
      to: ['bikamanzi@gmail.com'],
      subject: `New Project Inquiry - ${service}`,
      react: ContactFormEmail({
        name,
        email,
        service,
        budget,
        timeline,
        message: message || 'No additional details provided',
        submittedAt: new Date().toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        clientIP,
        userAgent,
      }),
    });

    if (adminError) {
      console.error('Error sending admin email:', adminError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const { error: userError } = await resend.emails.send({
      from: 'Bill Kamanzi <info@bilkamanzi.com>',
      to: [email],
      subject: "Thanks for reaching out! I'll get back to you within 24 hours.",
      react: ConfirmationEmail({
        name,
        service,
      }),
    });

    if (userError) {
      console.error('Error sending confirmation email:', userError);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
      emailId: adminEmailData?.id,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

