import styles from './Equipo.module.css';

export function EquipoTarjeta({ nombre, email, puesto, foto }) {
	return (
		<article className={styles.tarjeta}>
			<img
				className={styles.foto}
				src={foto}
				alt={`Foto de ${nombre}`}
				loading="lazy"
			/>
			<h3 className={styles.nombre}>{nombre}</h3>
			<p className={styles.puesto}>{puesto}</p>
			<a className={styles.email} href={`mailto:${email}`}>
				{email}
			</a>
		</article>
	);
}
