import { appName, appUrl } from '#config/app'
import User from '#users/database/models/user'
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface ResetPasswordEmailProps {
  user: User
  signedUrl: string
}

export const ResetPasswordEmail = ({ user, signedUrl }: ResetPasswordEmailProps) => (
  <Html>
    <Head />
    <Preview>Reset your password for {appName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`${appUrl}/logo.png`} width="50" height="50" alt={appName} />
        <Text style={paragraph}>Hi {user.fullName},</Text>
        <Text style={paragraph}>
          We received a request to reset your password for your {appName} account.
        </Text>
        <Text style={paragraph}>Click the button below to reset your password:</Text>
        <Section style={btnContainer}>
          <Button style={neutralButton} href={signedUrl}>
            Reset Password
          </Button>
        </Section>
        <Text style={paragraph}>
          If you did not request a password reset, please ignore this email or contact support if
          you have questions.
        </Text>
        <Text style={paragraph}>
          Best,
          <br />
          The {appName} team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          If you’re having trouble clicking the "Reset Password" button, copy and paste the URL
          below into your web browser:
          <br />
          {signedUrl}
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ResetPasswordEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const btnContainer = {
  textAlign: 'center' as const,
}

const neutralButton = {
  backgroundColor: '#000000', // Neutral color (black)
  borderRadius: '3px',
  color: '#ffffff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 20px',
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
}
