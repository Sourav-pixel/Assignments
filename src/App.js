import React from 'react';
import { CartProvider } from './CartContext';
import ProductsCard from './ProductsCard';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <ProductsCard />
      </div>
    </CartProvider>
  );
}

export default App;
