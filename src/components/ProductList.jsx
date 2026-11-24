import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from './ProductCard';
import './ProductList.css';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=6')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  function addProduct(e) {
    e.preventDefault();
    if (!title || !price) return;
    const newProduct = {
      id: Date.now(),
      title,
      price: Number(price),
      image: 'https://via.placeholder.com/150'
    };
    setProducts([newProduct, ...products]);
    setTitle('');
    setPrice('');
  }

  return (
    <div className="product-list">
      <h2>Mini Loja Virtual</h2>
      <form onSubmit={addProduct} className="add-form">
        <input
          placeholder="Nome do produto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
