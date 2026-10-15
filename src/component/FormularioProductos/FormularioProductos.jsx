function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen }) {
    const formStyle = {
display: 'flex',
flexDirection: 'column',
maxWidth: '24rem',
margin: '3rem auto',
padding: '1.5rem',
border: '1px solid #ddd',
borderRadius: '8px',
gap: '16px'
};
  return (
    <form style={formStyle} onSubmit={manejarEnvio}>
        <h3>Agregar Nuevo Producto</h3>
        <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text"  name="nombre" required onChange={manejarCambio}/>
        </div>
        <div>
            <label>Precio: $</label>
            <input type="number"placeholder="Ej: 95"
             name="precio"  value={datosForm.precio}
             onChange={manejarCambio}
/>
        </div>
        <div>
            <label>Stock: </label>
            <input type="number"placeholder="Ej: 95"
             name="stock"  value={datosForm.stock}
             onChange={manejarCambio}
/>
        </div>
        <div>
            <label>Imagen:</label>
            <input 
                   type="file" 
                   name="imagen" 
                   accept="image/*" 
                   onChange={manejarCambioImagen} /> 
        </div>
        

<button type="submit">Guardar Producto</button>
    </form>
  )  
} 
export default FormularioProducto;


