import Link from 'next/link';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to <span style={{ color: '#4CAF50' }}>Evara</span>
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Empowering Artisans. Enriching Culture.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
            AI-powered marketplace connecting traditional Indian craftsmen with global audiences. 
            Share your story, showcase your craft, expand your reach.
          </Typography>
          
          <Box sx={{ mt: 4 }}>
            <Link href="/upload" passHref>
              <Button variant="contained" size="large" sx={{ mr: 2, bgcolor: '#4CAF50' }}>
                Start Selling
              </Button>
            </Link>
            <Link href="/marketplace" passHref>
              <Button variant="outlined" size="large">
                Browse Products
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ py: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>AI-Powered Storytelling</Typography>
                <Typography variant="body2" color="text.secondary">
                  Upload photos and voice recordings. Our AI creates compelling product descriptions in multiple languages.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>Global Marketplace</Typography>
                <Typography variant="body2" color="text.secondary">
                  Reach customers worldwide with automatic translation and cultural context for your crafts.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>Simple Analytics</Typography>
                <Typography variant="body2" color="text.secondary">
                  Track your product performance with easy-to-understand insights and recommendations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
