import { Item } from '../TarjetaProductos/Item.jsx';

export function ItemList({ productos, carrito, onAgregarAlCarrito }) {
  return (
    <div className="productosGrid">
      {productos.map((producto) => {
        const productoEnCarrito = carrito.find((item) => item.id === producto.id);

        return (
          <Item
            key={producto.id}
            {...producto}
            cantidadEnCarrito={productoEnCarrito?.cantidad ?? 0}
            onAgregarAlCarrito={(cantidad) =>
              onAgregarAlCarrito(producto, cantidad)
            }
          />
        );
      })}
    </div>
  );
}