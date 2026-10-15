import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList.jsx';

function ItemListContainer({ carrito, onAgregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function cargarProductos() {
      try {
        const respuesta = await fetch('/Data/Productos.json', {
          signal: controller.signal,
        });

        if (!respuesta.ok) {
          throw new Error(`Error al cargar productos: ${respuesta.status}`);
        }

        const datos = await respuesta.json();

        if (!Array.isArray(datos)) {
          throw new Error('El archivo de productos debe contener una lista.');
        }

        setProductos(datos);
      } catch (errorCarga) {
        if (errorCarga.name !== 'AbortError') {
          setError('No se pudieron cargar los productos.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarProductos();

    return () => controller.abort();
  }, []);

  if (cargando) {
    return <p role="status">Cargando productos...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <ItemList
      productos={productos}
      carrito={carrito}
      onAgregarAlCarrito={onAgregarAlCarrito}
    />
  );
}

export default ItemListContainer;