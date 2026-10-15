import { EquipoTarjeta } from './EquipoTarjeta.jsx';
import styles from './Equipo.module.css';

export function EquipoList({ equipo }) {
	return (
		<div className={styles.lista}>
			{equipo.map((persona) => (
				<EquipoTarjeta key={persona.id} {...persona} />
			))}
		</div>
	);
}
