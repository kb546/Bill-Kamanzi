import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  submittedAt: string;
  clientIP: string;
  userAgent: string;
}

export default function ContactFormEmail({
  name,
  email,
  service,
  budget,
  timeline,
  message,
  submittedAt,
  clientIP,
  userAgent,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🚀 New Project Inquiry</Heading>
          
          <Section style={section}>
            <Heading style={h2}>Contact Information</Heading>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading style={h2}>Project Details</Heading>
            <Text style={text}>
              <strong>Service Interested In:</strong> {service}
            </Text>
            <Text style={text}>
              <strong>Budget:</strong> {budget}
            </Text>
            <Text style={text}>
              <strong>Timeline:</strong> {timeline}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading style={h2}>Project Description</Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={metaText}>
              <strong>Submitted:</strong> {submittedAt}
            </Text>
            <Text style={metaText}>
              <strong>IP Address:</strong> {clientIP}
            </Text>
            <Text style={metaText}>
              <strong>User Agent:</strong> {userAgent}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const section = {
  padding: '0 48px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 48px',
  lineHeight: '1.2',
};

const h2 = {
  color: '#374151',
  fontSize: '20px',
  fontWeight: '600',
  margin: '24px 0 16px',
};

const text = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '8px 0',
};

const messageText = {
  ...text,
  backgroundColor: '#f9fafb',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  whiteSpace: 'pre-wrap',
};

const metaText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '4px 0',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 48px',
};

