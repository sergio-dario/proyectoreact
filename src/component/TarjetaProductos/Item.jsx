import { useState } from 'react';
import styles from './TarjetaProductos.module.css';

export function Item({
  nombre,
  imagen,
  precio,
  stock,
  cantidadEnCarrito = 0,
  onAgregarAlCarrito,
}) {
  const [cantidad, setCantidad] = useState(0);
  const stockNumerico = Number(stock);
  const stockTotal = Number.isFinite(stockNumerico)
    ? Math.max(0, Math.floor(stockNumerico))
    : 0;
  const comprado = Math.max(0, Number(cantidadEnCarrito) || 0);
  const disponible = Math.max(0, stockTotal - comprado);
  const cantidadSeleccionada = Math.min(cantidad, disponible);
  const precioNumerico = Number(precio);

  function incrementar() {
    if (cantidad < disponible) {
      setCantidad((cantidadActual) =>
        Math.min(cantidadActual + 1, disponible),
      );
    }
  }

  function decrementar() {
    setCantidad((cantidadActual) => Math.max(cantidadActual - 1, 0));
  }

  function agregarAlCarrito() {
    if (cantidadSeleccionada === 0 || !onAgregarAlCarrito) return;

    onAgregarAlCarrito(cantidadSeleccionada);
    setCantidad(0);
  }

  return (
    <article className={styles.tarjeta}>
      <div className={styles.imagenContenedor}>
        <img
          className={styles.imagen}
          src={imagen}
          alt={nombre}
          loading="lazy"
        />
      </div>

      <div className={styles.detalle}>
        <h2 className={styles.nombre}>{nombre}</h2>
        <p className={styles.precio}>
          {Number.isFinite(precioNumerico)
            ? `$${precioNumerico.toLocaleString('es-AR')}`
            : 'Precio no disponible'}
        </p>
        <p className={disponible ? styles.stock : styles.sinStock}>
          {disponible > 0
            ? `${disponible} ${disponible === 1 ? 'disponible' : 'disponibles'}`
            : 'Sin stock'}
        </p>
        <div className={styles.cantidadControl}>
          <span>Cantidad</span>
          <div className={styles.contador} role="group" aria-label="Seleccionar cantidad">
            <button
              className={styles.contadorBoton}
              type="button"
              aria-label="Disminuir cantidad"
              disabled={cantidadSeleccionada <= 0}
              onClick={decrementar}
            >
              -
            </button>
            <output className={styles.contadorValor} aria-live="polite">
              {cantidadSeleccionada}
            </output>
            <button
              className={styles.contadorBoton}
              type="button"
              aria-label="Aumentar cantidad"
              disabled={cantidadSeleccionada >= disponible}
              onClick={incrementar}
            >
              +
            </button>
          </div>
        </div>
        <button
          className={styles.boton}
          type="button"
          disabled={cantidadSeleccionada === 0}
          onClick={agregarAlCarrito}
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}