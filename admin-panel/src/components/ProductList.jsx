import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = await getDocs(collection(db, 'products'));
            setProducts(productsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'products', id));
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <Box sx={{ width: 100, height: 100 }}>
                                    <img 
                                        src={product.img} 
                                        alt={product.name} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </TableCell>
                            <TableCell align="right">{product.price}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" color="primary" component={Link} to={`/edit/${product.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => handleDelete(product.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductList;
