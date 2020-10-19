import React from 'react';
import Product from '../../components/Product';
import { useSelector } from 'react-redux'

export default function List() {
	const product =  useSelector(state => state.products);
	return (
		<div className="container-fluid">
			<div className="row">{product.map((product, index) => <Product key={index} product={product} />)}</div>
		</div>
	);
}
