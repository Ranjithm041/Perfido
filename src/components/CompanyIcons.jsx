import React from 'react'
import LogoField from '../components/LogoField';
import { Typography,Box} from '@mui/material';
import MicrosoftLogo from '../Assets/Microsoft_Outlook-Logo.png';
import GitLogo from '../Assets/Git-Logo.png';
import AppleLogo from '../Assets/Apple-Logo.png';
import { Link } from 'react-router-dom';
import GmailLogo from '../Assets/Gmail-Logo.png';
const CompanyIcons = () => {
    const logos = [
        { source: MicrosoftLogo, alt: 'Microsoft', path: 'https://www.microsoft.com/en-us/microsoft-365/outlook/log-in' },
        { source: AppleLogo, alt: 'Apple', path: '/apple' },
        { source: GmailLogo, alt: 'Gmail', path: '/gmail' },
        { source: GitLogo, alt: 'Git', path: '/git' },
      ];
  return (
    <>
      <Typography sx={{
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: '0.625rem',
            fontWeight: 400,
            lineHeight: '1.2',
            textAlign: 'center',
            margin: '10px 0',
            color: '#A0B4CF',
          }}>
            Continue with
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            {logos.map((logo, index) => (
              <Link key={index} to={logo.path} target="_blank" style={{ textDecoration: 'none' }}>
                <LogoField source={logo.source} alt={logo.alt} />
              </Link>
            ))}
          </Box>
    </>
  )
}

export default CompanyIcons
