import { Box, Typography, Card, CardContent, Avatar, Stack } from '@mui/material';
import testimonials from '../constraints/testimonials';

export default function Testimonials() {
  return (
    <Box sx={{ px: 4, py: 10, backgroundColor: '#f0f4f8' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
        What Our Travelers Say
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, overflowX: 'auto', pb: 2 }}>
        {testimonials.map((item) => (
          <Card key={item.id} sx={{ minWidth: 300, flexShrink: 0, borderRadius: 3 }}>
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <Avatar src={item.image} sx={{ width: 60, height: 60 }} />
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                  "{item.review}"
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
