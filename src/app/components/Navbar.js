import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#2E7D32' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            EVARA
          </Link>
        </Typography>
        
        <Box>
          <Link href="/marketplace" passHref>
            <Button color="inherit" sx={{ mr: 1 }}>Marketplace</Button>
          </Link>
          <Link href="/upload" passHref>
            <Button color="inherit" sx={{ mr: 1 }}>Upload Product</Button>
          </Link>
          <Link href="/dashboard" passHref>
            <Button color="inherit">Dashboard</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
