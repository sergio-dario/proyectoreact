import EquipoConteiner from '../Equipo/EquipoConteiner.jsx';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <EquipoConteiner />
            <p className={styles.copyright}>
                &copy; 2026 - Mi Aplicación React
            </p>
        </footer>
    );
}

export default Footer;