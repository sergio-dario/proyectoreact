
import { useState } from 'react';
import './App.css';
import { Layout } from './component/Layout/Layout.jsx';
import ItemListContainer from './component/ItemListContainer/ItemListContainer.jsx';
import FormularioContainer from './component/FormularioContainer/FormularioContainer.jsx';

function App() {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto, cantidad) {
    setCarrito((productosEnCarrito) => {
      const productoExistente = productosEnCarrito.find(
        (item) => item.id === producto.id,
      );
      const cantidadActual = productoExistente?.cantidad ?? 0;
      const stockDisponible = Math.max(0, Number(producto.stock) - cantidadActual);
      const cantidadAAgregar = Math.min(cantidad, stockDisponible);

      if (cantidadAAgregar <= 0) return productosEnCarrito;

      if (productoExistente) {
        return productosEnCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidadAAgregar }
            : item,
        );
      }

      return [...productosEnCarrito, { ...producto, cantidad: cantidadAAgregar }];
    });
  }

  const cantidadEnCarrito = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0,
  );

  return (
    <Layout>
      <section className="catalogo">
        <div className="catalogoEncabezado">
          <div>
            <p className="catalogoEtiqueta">Muebles para disfrutar</p>
            <h1 className="catalogoTitulo">Livings</h1>
          </div>
          <p className="carritoEstado" aria-live="polite">
            Carrito <span>{cantidadEnCarrito}</span>
          </p>
        </div>

        <ItemListContainer
          carrito={carrito}
          onAgregarAlCarrito={agregarAlCarrito}
        />
        <FormularioContainer />
      </section>
    </Layout>
  );
}

export default App;