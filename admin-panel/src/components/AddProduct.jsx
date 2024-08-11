import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { TextField, Button, Snackbar, Alert } from '@mui/material';


function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImg,setProductImg] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  

  const handleAddProduct = async () => {
    try {
      await addDoc(collection(db, 'products'), {
        name: productName,
        price: productPrice,
        img:productImg
      });
      setMessage('Product added successfully!');
      setOpen(true);
      setProductName('');
      setProductPrice('');
      setProductImg('');
      // await navigate("/list")
    } catch (error) {
      console.error("Error adding product: ", error);
      setMessage('Failed to add product.');
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>Add Product</h1>
      <TextField
        label="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        fullWidth
        margin="normal"
        type="number"
      />
      <TextField
        label="Product ImageURL"
        value={productImg}
        onChange={(e) => setProductImg(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddProduct}>
        Add Product
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message.includes('Failed') ? 'error' : 'success'}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AddProduct;
