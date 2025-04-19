import { AppBar, Toolbar, Typography, Box, Button, Stack } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="absolute" sx={{ background: 'transparent', boxShadow: 'none', color: '#fff' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          GoWilds
        </Typography>

        {/* Menu Links */}
        <Stack direction="row" spacing={4}>
          {['Home', 'Destinations', 'About', 'Tours', 'Blog', 'Contact'].map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Stack>

        {/* Book Button */}
        <Button variant="contained" color="primary">
          Book Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}
