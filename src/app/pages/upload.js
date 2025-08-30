import { useState } from 'react';
import { 
  Container, Typography, Box, TextField, Button, 
  Card, CardContent, Grid, Alert 
} from '@mui/material';
import Navbar from '../components/Navbar';

export default function Upload() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    story: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    console.log('Product submitted:', product);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" gutterBottom>
            Upload Your Product
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Share your craft with the world. Upload images and tell your story.
          </Typography>

          {submitted && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Product uploaded successfully! AI is generating your description...
            </Alert>
          )}

          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Product Name"
                      name="name"
                      value={product.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box sx={{ border: '2px dashed #ccc', p: 4, textAlign: 'center', borderRadius: 2 }}>
                      <Typography variant="h6" color="text.secondary">
                        Upload Images
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Click or drag images here (Coming Soon)
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Price (₹)"
                      name="price"
                      type="number"
                      value={product.price}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Tell Your Story"
                      name="story"
                      multiline
                      rows={4}
                      value={product.story}
                      onChange={handleChange}
                      placeholder="Describe your craft, the tradition behind it, and what makes it special..."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ border: '1px solid #4CAF50', p: 3, borderRadius: 2, bgcolor: '#f1f8e9' }}>
                      <Typography variant="subtitle1" gutterBottom>
                        🤖 AI Preview (Sample Generated Content):
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        "Handcrafted with love using traditional techniques passed down through generations. 
                        This unique piece showcases the rich cultural heritage of Indian artisans..."
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      size="large" 
                      sx={{ bgcolor: '#4CAF50' }}
                    >
                      Upload Product
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
