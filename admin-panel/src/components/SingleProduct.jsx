import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>{product.name}</Typography>
      <Typography variant="h6" gutterBottom>Price: ${product.price}</Typography>
      
      {/* Image Section */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          height: 'auto',
          margin: '0 auto',
          mb: 2,
        }}
      >
        <img
          src={product.img}
          alt={product.name}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </Box>
      
      <Typography variant="body1">{product.description}</Typography>
    </Box>
  );
}

export default SingleProduct;
