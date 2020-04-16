import React from 'react';
import { NavLink } from 'react-router-dom';  
import {CartContext} from '../contexts/CartContext'



const Navigation = props => {

const {cart} = React.useContext(CartContext)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;


// so that circle is just a span with maybe CSS. And it is just the result of the length of an array. 