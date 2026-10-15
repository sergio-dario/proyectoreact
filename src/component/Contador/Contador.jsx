import styles from '../TarjetaProductos/TarjetaProductos.module.css';

function Contador({ cantidad, maximo, onCambiar }) {
  return (
    <div className={styles.contador} role="group" aria-label="Seleccionar cantidad">
      <button
        className={styles.contadorBoton}
        type="button"
        aria-label="Disminuir cantidad"
        disabled={cantidad <= 0}
        onClick={() => onCambiar(Math.max(0, cantidad - 1))}
      >
        -
      </button>
      <output className={styles.contadorValor} aria-live="polite">
        {cantidad}
      </output>
      <button
        className={styles.contadorBoton}
        type="button"
        aria-label="Aumentar cantidad"
        disabled={cantidad >= maximo}
        onClick={() => onCambiar(Math.min(maximo, cantidad + 1))}
      >
        +
      </button>
    </div>
  );
}

export default Contador;