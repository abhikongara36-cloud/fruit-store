import React, { useState } from 'react';
import CartDetails from './CartDetails';
import './CartDetails.css';

const fruits = [
  { id: 1, name: "Apple", price: "₹250/kg", img: "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Banana", price: "₹50/kg", img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Mango", price: "₹200/kg", img: "https://images.unsplash.com/photo-1635716279493-d1e30afc25a0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Orange", price: "₹120/kg", img: "https://plus.unsplash.com/premium_photo-1670512181061-e24282f7ee78?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Grapes", price: "₹180/kg", img: "https://plus.unsplash.com/premium_photo-1724250449759-f9bbb5fd4f63?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Pineapple", price: "₹45/kg", img: "https://plus.unsplash.com/premium_photo-1724255994628-dceb76a829e8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, name: "Watermelon", price: "₹40/kg", img: "https://plus.unsplash.com/premium_photo-1724256227267-cfe917bc1d9b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Strawberry", price: "₹60/kg", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

function FruitStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (fruit) => {
    const exists = cart.find(item => item.id === fruit.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === fruit.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...fruit, quantity: 1 }]);
    }
  };

  return (
    <div className="container">
      <h1>Fresh Fruits Store</h1>

      <div className="grid">
        {fruits.map(fruit => (
          <div key={fruit.id} className="card">
            <img src={fruit.img} alt={fruit.name} />
            <div className="card-content">
              <p>{fruit.name}</p>
              <p>{fruit.price}</p>
              <button onClick={() => addToCart(fruit)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <CartDetails cart={cart} setCart={setCart} />
    </div>
  );
}

export default FruitStore;