import { useEffect, useState } from 'react';
import { EquipoList } from './EquipoList.jsx';
import styles from './Equipo.module.css';

function EquipoConteiner() {
	const [equipo, setEquipo] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const controller = new AbortController();

		async function cargarEquipo() {
			try {
				const respuesta = await fetch('/Data/Equipo.json', {
					signal: controller.signal,
				});

				if (!respuesta.ok) {
					throw new Error(`Error al cargar el equipo: ${respuesta.status}`);
				}

				const datos = await respuesta.json();

				if (!Array.isArray(datos)) {
					throw new Error('El archivo del equipo debe contener una lista.');
				}

				setEquipo(datos);
			} catch (errorCarga) {
				if (errorCarga.name !== 'AbortError') {
					setError('No se pudo cargar el equipo.');
				}
			} finally {
				if (!controller.signal.aborted) {
					setCargando(false);
				}
			}
		}

		cargarEquipo();

		return () => controller.abort();
	}, []);

	return (
		<section className={styles.seccion} aria-labelledby="equipo-titulo">
			<h2 className={styles.titulo} id="equipo-titulo">
				Nuestro equipo
			</h2>
			{cargando && <p role="status">Cargando equipo...</p>}
			{error && <p role="alert">{error}</p>}
			{!cargando && !error && <EquipoList equipo={equipo} />}
		</section>
	);
}

export default EquipoConteiner;
