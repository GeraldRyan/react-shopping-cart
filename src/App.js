import React, { useState } from 'react';
import { Route } from 'react-router-dom';  // good to remind oneself what is required for this as a refresher
import data from './data'; // Just a simple JSON like object. 

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item])   // remember syntax and JS Shortcuts and you will get far faster. 
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;



// ok so I have a sense of the structure. products (lower case) will not change so hence it does not require a setter. Cart will change so it requires a setter. addItem just takes a param. 


