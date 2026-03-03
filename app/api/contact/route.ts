import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendAPIKey = process.env.RESEND_API_KEY || ''
const resend = resendAPIKey ? new Resend(resendAPIKey) : null

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 503 }
      )
    }

    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio <info@bilkamanzi.com>',
      to: ['bikamanzi@gmail.com'],
      subject: `Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      return NextResponse.json({ error: 'Failed to send.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
