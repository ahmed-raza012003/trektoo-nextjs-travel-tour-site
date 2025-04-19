import { Box, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', color: '#fff', px: 4, py: 6, mt: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            GoWilds
          </Typography>
          <Typography variant="body2" color="gray">
            Explore the world with our expertly guided tours and unforgettable experiences.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Link href="#" underline="none" color="gray">Home</Link>
            <Link href="#" underline="none" color="gray">Destinations</Link>
            <Link href="#" underline="none" color="gray">Tours</Link>
            <Link href="#" underline="none" color="gray">Contact</Link>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" color="gray">123 Travel St, Adventure City</Typography>
          <Typography variant="body2" color="gray">Email: info@gowilds.com</Typography>
          <Typography variant="body2" color="gray">Phone: +1 234 567 890</Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <IconButton href="#" color="inherit"><FacebookIcon /></IconButton>
            <IconButton href="#" color="inherit"><TwitterIcon /></IconButton>
            <IconButton href="#" color="inherit"><InstagramIcon /></IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
