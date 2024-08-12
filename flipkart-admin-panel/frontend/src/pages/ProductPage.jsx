import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProductPage.css'; // Import the CSS file for styling

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [mode, setMode] = useState(false);
  const [edit, setEdit] = useState({
    name: '',
    price: '',
    size: '',
    image: '',
    rating: '',
    category: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:9999/productData');
        setProducts(response.data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProduct();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9999/deleteData/${id}`);
    setProducts(products.filter((val) => val._id !== id));
  };

  const handleEdit = (product) => {
    setMode(true);
    setEdit(product);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9999/updateData/${edit._id}`, edit);
      setProducts(products.map(val => val._id === edit._id ? edit : val));
      setMode(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="product-page">
      <h2>Products</h2>
      {mode ? (
        <form onSubmit={handleUpdate} className="edit-form">
          <input
            type="text"
            value={edit.name}
            onChange={(e) => setEdit({ ...edit, name: e.target.value })}
            placeholder="Product Name"
          />
          <input
            type="number"
            value={edit.price}
            onChange={(e) => setEdit({ ...edit, price: e.target.value })}
            placeholder="Product Price"
          />
          <input
            type="text"
            value={edit.size}
            onChange={(e) => setEdit({ ...edit, size: e.target.value })}
            placeholder="Product Size"
          />
          <input
            type="text"
            value={edit.image}
            onChange={(e) => setEdit({ ...edit, image: e.target.value })}
            placeholder="Product Image URL"
          />
          <input
            type="text"
            value={edit.rating}
            onChange={(e) => setEdit({ ...edit, rating: e.target.value })}
            placeholder="Product Rating"
          />
          <input
            type="text"
            value={edit.category}
            onChange={(e) => setEdit({ ...edit, category: e.target.value })}
            placeholder="Product Category"
          />
          <button type="submit">Update Product</button>
          <button type="button" onClick={() => setMode(false)}>Cancel</button>
        </form>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Size: {product.size}</p>
                <p>Rating: {product.rating}</p>
                <p>Category: {product.category}</p>
              </div>
              <div className="product-actions">
                <button onClick={() => handleDelete(product._id)} className="delete-button">Delete</button>
                <button onClick={() => handleEdit(product)} className="edit-button">Edit</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
