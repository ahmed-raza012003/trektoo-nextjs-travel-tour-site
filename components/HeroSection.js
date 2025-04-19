import { Box, Typography, Button } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        px: 2,
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Adventure & Travel
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Discover the beauty of the wild with us
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Explore Now
        </Button>
      </Box>
    </Box>
  );
}
