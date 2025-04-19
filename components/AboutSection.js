import { Box, Grid, Typography, Button, Stack } from '@mui/material';

export default function AboutSection() {
  return (
    <Box sx={{ px: 4, py: 10 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/06/about3.jpg"
            alt="About GoWilds"
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>

        {/* Right Side - Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Discover New Horizons
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            We’re not just a travel company. We’re your passport to unforgettable adventures.
            Join us to explore some of the world’s most breathtaking locations.
          </Typography>

          <Stack spacing={2} sx={{ mb: 4 }}>
            <Typography variant="body1">✅ Experienced Guides</Typography>
            <Typography variant="body1">✅ Unique Destinations</Typography>
            <Typography variant="body1">✅ Trusted by Travelers</Typography>
          </Stack>

          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
