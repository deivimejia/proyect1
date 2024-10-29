import React, { useRef } from 'react';
import Phrase from './components/Phrase.jsx';
import Background from './components/Background.jsx';
import './App.css';
function App() {
	const actualizarFraseRef = useRef(null);
	const actualizarImagenRef = useRef(null);

	return (
		<Background onActualizarImagen={actualizarImagenRef}>
			<div className="container">
				<h1 className="heading">
					Galletas de la <br />
					Fortuna
				</h1>
				<Phrase onActualizarFrase={actualizarFraseRef} />
				<button
					onClick={() => {
						if (actualizarFraseRef.current) actualizarFraseRef.current();
						if (actualizarImagenRef.current) actualizarImagenRef.current();
					}}
					className="btn"
				>
					Generar Nuevo
				</button>
			</div>
		</Background>
	);
}

export default App;
