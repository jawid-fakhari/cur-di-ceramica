// Suspense lets you display a fallback until its children have finished loading.
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/Products';
import Navbar from './components/Navbar';




export default function App() {

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</>

	)
}

// devo completare il secondo page Overlay

// devo cambiare count in base alla larghezza del screen 