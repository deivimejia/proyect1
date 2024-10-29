import { useState, useEffect } from 'react';
import phrases from '../../src/phrases.json';
import RandonIndex from './RandonIndex.jsx';

function Phrase({ onActualizarFrase }) {
	const [phrase, setPhrase] = useState(phrases[RandonIndex(phrases.length)]);

	const actualizarFrase = () => {
		const nuevaFrase = phrases[RandonIndex(phrases.length)];
		setPhrase(nuevaFrase);
	};

	useEffect(() => {
		if (onActualizarFrase) {
			onActualizarFrase.current = actualizarFrase; // Almacenamos la función en la referencia
		}
	}, [onActualizarFrase]);

	return (
		<div className="card">
			<div className="div card__body">
				<q className="phrase">{phrase.phrase}</q> <br />
				<cite className="author">-{phrase.author}</cite>
			</div>
		</div>
	);
}

export default Phrase;
