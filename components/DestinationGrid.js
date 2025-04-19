import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import destinations from '../constraints/destinations';

export default function DestinationGrid() {
  return (
    <Box sx={{ py: 10, px: 4, backgroundColor: '#f7f7f7' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
        Popular Destinations
      </Typography>
      <Grid container spacing={4}>
        {destinations.map((dest) => (
          <Grid item xs={12} md={4} key={dest.id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia component="img" height="200" image={dest.image} alt={dest.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {dest.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {dest.desc}
                </Typography>
                <Button variant="outlined">View More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
