import { 
  Container, Typography, Grid, Card, CardContent, 
  CardMedia, Button, Chip, Box 
} from '@mui/material';
import Link from 'next/link';
import Navbar from '../components/Navbar';

// Dummy product data
const sampleProducts = [
  {
    id: 1,
    name: "Handwoven Silk Saree",
    price: "₹12,500",
    artisan: "Kamala Devi",
    location: "Varanasi, UP",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300",
    description: "Traditional Banarasi silk saree with intricate gold thread work"
  },
  {
    id: 2,
    name: "Ceramic Tea Set",
    price: "₹2,800",
    artisan: "Ravi Kumar",
    location: "Khurja, UP",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300",
    description: "Hand-painted ceramic tea set with traditional motifs"
  },
  {
    id: 3,
    name: "Wooden Jewelry Box",
    price: "₹1,500",
    artisan: "Meera Singh",
    location: "Saharanpur, UP",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
    description: "Intricately carved wooden jewelry box with mirror"
  }
];

export default function Marketplace() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" gutterBottom>
            Discover Authentic Crafts
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Support local artisans and discover unique handmade products from across India.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {sampleProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip 
                        label={`By ${product.artisan}`} 
                        size="small" 
                        sx={{ mr: 1, mb: 1 }} 
                      />
                      <Chip 
                        label={product.location} 
                        size="small" 
                        variant="outlined" 
                      />
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Link href={`/product/${product.id}`} passHref>
                      <Button variant="contained" fullWidth sx={{ bgcolor: '#4CAF50' }}>
                        View Details
                      </Button>
                    </Link>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
