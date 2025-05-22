import React, { useState } from 'react';

const defaultProducts = [
  { 
    _id: '1', 
    name: 'Mens Polo Neck Tshirt', 
    stock: 5, 
    maxStock: 10, 
    description: 'A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
    image: 'https://res.cloudinary.com/dlu2nu7py/image/upload/v1738741460/le2c2ouq0xtr1krzdhwo.png'
  },
  { 
    _id: '2', 
    name: 'H&M Coats', 
    stock: 2, 
    maxStock: 10, 
    description: 'Winter Wear Oversize Coats For Western Ladies',
    image: 'https://i.pinimg.com/736x/b8/7e/db/b87edbf02e7f1889f7d14c2af914cae5.jpg'
  },
  { 
    _id: '3', 
    name: 'Striking Slim Fit Light Fade Jeans', 
    stock: 8, 
    maxStock: 10, 
    description: 'Keep it cool with these light fade slim fit jeans. Perfect for any casual occasion, they offer both style and comfort.',
    image: 'https://res.cloudinary.com/dlu2nu7py/image/upload/v1738743822/tqbzd7hmd9rencg6wksj.webp'
  },
];

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '12px',
  width: '260px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
  background: '#fafafa',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  marginTop: '24px',
  justifyContent: 'center',
};

const imageStyle = {
  width: '200px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '4px',
  marginBottom: '12px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: 'auto',
};

const Inventory = () => {
  const [products, setProducts] = useState(defaultProducts);

  const handleAddToCart = (productId) => {
    setProducts(products.map(product => {
      if (product._id === productId && product.stock > 0) {
        return { ...product, stock: product.stock - 1 };
      }
      return product;
    }));
  };

  return (
    <div>
      <h1>Inventory</h1>
      <div style={containerStyle}>
        {products.length === 0 ? (
          <div>No products found.</div>
        ) : (
          products.map(product => (
            <div key={product._id} style={cardStyle}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={imageStyle}
              />
              <h2>{product.name}</h2>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Stock Left:</strong> {product.stock}</p>
              <p><strong>Max Stock:</strong> {product.maxStock}</p>
              <button 
                style={{ 
                  ...buttonStyle, 
                  backgroundColor: product.stock === 0 ? '#ccc' : '#4CAF50',
                  cursor: product.stock === 0 ? 'not-allowed' : 'pointer'
                }}
                onClick={() => handleAddToCart(product._id)}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Inventory;
