import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductDetails = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h4" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {product.company}
        </Typography>
        <Typography variant="body1" component="div">
          Category: {product.category}
        </Typography>
        <Typography variant="body1" component="div">
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" component="div">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body1" component="div">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body1" component="div">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductDetails;
