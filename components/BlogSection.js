import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import blogs from '../constraints/blogs';

export default function BlogSection() {
  return (
    <Box sx={{ px: 4, py: 10 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
        From Our Travel Blog
      </Typography>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={4} key={blog.id}>
            <Card>
              <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {blog.excerpt}
                </Typography>
                <Button variant="outlined" size="small">Read More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
