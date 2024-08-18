import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '2rem 0',
      }}
    >
      <Grid container spacing={3} sx={{ textAlign: 'center' }}>
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Company
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.6' }}>
            {['About Us', 'Complaints', 'Careers', 'Terms & Conditions', 'Privacy Policy', 'Blogs'].map((text) => (
              <li key={text} style={{ marginBottom: '0.5rem' }}>
                <Link href="#" underline="none" color="#fff">{text}</Link>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Help Lines Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Help Lines
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.6' }}>
            {['Feedback', 'Complaints', 'Customer Care', 'Contact Us'].map((text) => (
              <li key={text} style={{ marginBottom: '0.5rem' }}>
                <Link href="#" underline="none" color="#fff">{text}</Link>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Cities Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Cities
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.6' }}>
            {['Kolkata', 'Mumbai', 'Bangalore', 'Chennai'].map((city) => (
              <li key={city} style={{ marginBottom: '0.5rem' }}>
                <Link href="#" underline="none" color="#fff">{city}</Link>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Delhi Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Delhi
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.6' }}>
            {['Pune', 'Coimbatore', 'Nagpur', 'Hyderabad', 'Ahmedabad'].map((city) => (
              <li key={city} style={{ marginBottom: '0.5rem' }}>
                <Link href="#" underline="none" color="#fff">{city}</Link>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Get Connected Section */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Get Connected
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="#" aria-label="Instagram">
              <InstagramIcon sx={{ color: '#fff', fontSize: '2rem' }} />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FacebookIcon sx={{ color: '#fff', fontSize: '2rem' }} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <TwitterIcon sx={{ color: '#fff', fontSize: '2rem' }} />
            </Link>
            <Link href="#" aria-label="YouTube">
              <YouTubeIcon sx={{ color: '#fff', fontSize: '2rem' }} />
            </Link>
          </div>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <div style={{ textAlign: 'center', paddingTop: '1rem', color: '#ddd' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Comfort Crew. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
