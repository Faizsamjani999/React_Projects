import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Snackbar, Alert, Typography, Box } from '@mui/material';

function EditProduct() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'products', id);
      await updateDoc(docRef, product);
      setMessage('Product updated successfully!');
      setOpen(true);
      navigate('/list');
    } catch (error) {
      console.error("Error updating product: ", error);
      setMessage('Failed to update product.');
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, '& .MuiTextField-root': { m: 1, width: '100%' } }}>
      <Typography variant="h4" gutterBottom>Edit Product</Typography>
      <TextField
        required
        label="Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <TextField
        required
        label="Price"
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <TextField
        required
        label="Image URL"
        multiline
        rows={4}
        value={product.img}
        onChange={(e) => setProduct({ ...product, img: e.target.value })}
      />
      <Button variant="contained" type="submit" color="primary" sx={{ m: 1 }}>
        Update Product
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message.includes('Failed') ? 'error' : 'success'}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default EditProduct;
