import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  /* Guia para el state: consiste en 3 partes:
	primero, una declaracion con 2 llaves, en una se le asigna nombre
	al contenedor, y en el segundo al metodo para modificar este state.
	la tercera parte es la definicion del state, con useState(). Dentro del
	parentesis va el dato al que vamos a asignar valores. por ejemplo, si
	queremos un contador, creariamos un useState(0), una lista un ([]) y asi.  */

  // State para productos.
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa reactJS", precio: 50 },
    { id: 2, nombre: "Camisa angular", precio: 40 },
    { id: 3, nombre: "Camisa vueJS", precio: 30 },
    { id: 4, nombre: "Camisa nodeJS", precio: 20 },
  ]);

  // State para un carrito de compras.
  const [carrito, addProducto] = useState([]);

  //obtener la fecha.
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header/>

      <h1>Lista de productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          addProducto={addProducto}
        />
      ))}

      <Carrito 
			carrito={carrito}
			addProducto={addProducto}

			/>

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
