import React, {useState} from 'react';
import { addProduct} from '../../store/products';
import {useDispatch} from 'react-redux';
export default function Add() {
	const dispatch = useDispatch();

	const [ form, setForm] = useState ({
		name: '',
		url: ''
	});
	function onSubmit(e){
		e.preventDefaul();
		dispatch(addProduct(form));	
		setForm({name: '',url: ''});	
	}

	function formChange(e){
		setForm({...form, [e.target.name]:e.target.value })
	}
	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input onChange={formChange} type="text" name="name" className="form-control" placeholder="Nome..."value={form.name} />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input onChange={formChange} type="text" name="url" className="form-control" placeholder="URL" value={form.url}/>
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
