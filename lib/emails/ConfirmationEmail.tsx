import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Button,
} from '@react-email/components';

interface ConfirmationEmailProps {
  name: string;
  service: string;
}

export default function ConfirmationEmail({
  name,
  service,
}: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thanks for Reaching Out!</Heading>
          
          <Section style={section}>
            <Text style={text}>Hi {name},</Text>
            
            <Text style={text}>
              Thanks for your interest in <strong>{service}</strong>!
            </Text>

            <Text style={text}>
              I've received your inquiry and will review your project requirements carefully. 
              You'll hear back from me <strong>within 24 hours</strong>.
            </Text>

            <Hr style={hr} />

            <Text style={text}>In the meantime, feel free to:</Text>

            <Section style={buttonContainer}>
              <Button
                href="https://www.bilkamanzi.com/projects"
                style={button}
              >
                View My Portfolio
              </Button>
            </Section>

            <Section style={buttonContainer}>
              <Button
                href="https://www.bilkamanzi.com/images/Bill-Kamanzi-Resume.pdf"
                style={button}
              >
                Download My Resume
              </Button>
            </Section>

            <Section style={buttonContainer}>
              <Button
                href="https://www.linkedin.com/in/bill-kamanzi/"
                style={button}
              >
                Connect on LinkedIn
              </Button>
            </Section>

            <Hr style={hr} />

            <Text style={text}>
              For urgent inquiries, feel free to call me directly at{' '}
              <strong>+971 50 827 0514</strong>.
            </Text>

            <Text style={signature}>
              Best regards,
              <br />
              <strong>Bill Kamanzi</strong>
              <br />
              Performance Marketer • Data Scientist • Web Developer
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

const text = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};

const signature = {
  ...text,
  marginTop: '32px',
  color: '#374151',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 48px',
};

const buttonContainer = {
  padding: '8px 48px',
};

const button = {
  backgroundColor: '#10b981',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 24px',
  margin: '8px 0',
};

