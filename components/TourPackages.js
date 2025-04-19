import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, Stack } from '@mui/material';
import tours from '../constraints/tours';

export default function TourPackages() {
  return (
    <Box sx={{ px: 4, py: 10, backgroundColor: '#fff' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
        Featured Tour Packages
      </Typography>
      <Grid container spacing={4}>
        {tours.map((tour) => (
          <Grid item xs={12} md={4} key={tour.id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia component="img" height="200" image={tour.image} alt={tour.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {tour.title}
                </Typography>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
                  <Typography variant="body2">⏱ {tour.duration}</Typography>
                  <Typography variant="body2">💰 {tour.price}</Typography>
                </Stack>
                <Button variant="outlined">Explore Tour</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
