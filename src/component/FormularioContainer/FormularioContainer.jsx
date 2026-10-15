import { useState } from 'react';
import FormularioProducto from '../FormularioProductos/FormularioProductos.jsx';

function FormularioContainer() {
  // 1. Guarda los datos en el estado
  const [datosForm, setDatosForm] = useState(
    { 
    id: '',
    nombre: '',
    precio: '',
    stock: ''
    }
 );
 const [imagenFile, setImagenFile] = useState(null);

  // 2. Define las funciones
  const manejarCambio = (evento) => { 
    const { name, value } = evento.target;
   setDatosForm((prevDatos) => ({ ...prevDatos, [name]: value })); };

const manejarCambioImagen = (evento) => {
  setImagenFile(evento.target.files[0]);
};
 const manejarEnvio = async (evento) => {
  evento.preventDefault();
  if (!imagenFile) {
    alert('Por favor, selecciona una imagen antes de enviar el formulario.');
    return;
  }

  const apiKey = 'ingrese su api key aqui'; //  
  const formData = new FormData();
  formData.append('image', imagenFile);

  const respuesta = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData,
  });
  const imgbbData = await respuesta.json();
  const urlImagen = imgbbData.data.url;

  const productoCompleto = { ...datosForm, urlImagen: urlImagen };
  console.log('Producto listo para enviar:', productoCompleto);
};

  // 3. Conecta la lógica con la vista
  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
    />
  );
}

export default FormularioContainer;