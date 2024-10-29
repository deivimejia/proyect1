import RandonIndex from './RandonIndex.jsx';
import { bg1, bg2, bg3, bg4 } from '../assets/images/index';
import { useEffect, useState } from 'react';

const images = [bg1, bg2, bg3, bg4];

function Background({ children, onActualizarImagen }) {
	const [img, setImg] = useState(images[RandonIndex(images.length)]);

	const cambiarImagen = () => {
		const nuevaImagen = images[RandonIndex(images.length)];
		setImg(nuevaImagen);
	};
	useEffect(() => {
		if (onActualizarImagen) {
			onActualizarImagen.current = cambiarImagen;
		}
	}, [onActualizarImagen]);
	const style = {
		backgroundImage: `url(${img})`,
	};
	return (
		<div className="wrapper" style={style}>
			{children}
		</div>
	);
}

export default Background;
