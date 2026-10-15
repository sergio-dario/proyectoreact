

import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.announcement}>
                <p className={styles.announcementLead}>
                    <span className={styles.announcementDot} aria-hidden="true" />
                    Hecho para quedarse
                </p>
                <p className={styles.announcementNote}>Muebles de living · diseño local</p>
            </div>

            <div className={styles.inner}>
                <div className={styles.brand}>
                    <span className={styles.brandMark} aria-hidden="true">CS</span>
                    <span className={styles.brandCopy}>
                        <span className={styles.brandName}>ChaCha Norte</span>
                        <span className={styles.brandTagline}>Muebles para habitar</span>
                    </span>
                </div>

                <div className={styles.sections} role="group" aria-label="Secciones de la tienda">
                    <span className={styles.sectionActive}>Colección</span>
                    <span>Nosotros</span>
                    <span>Contacto</span>
                </div>

                <div className={styles.edition}>
                    <span className={styles.editionNumber}>01</span>
                    <span className={styles.editionLabel}>Selección<br />de living</span>
                </div>
            </div>
        </header>
    );
}

export default Header;