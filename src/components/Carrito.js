import React from 'react';
import './carrito.css';
import Producto from './Producto';


const Carrito = ({carrito,addProducto}) => {

    return(
    <div className='carrito'>
        <h2>Productos del carro:</h2>
        
        {carrito.length === 0 ? <p>El carrito esta vacio.</p>
    : carrito.map(prod => (
        <Producto
        key={prod.id}
        producto={prod}
        carrito={carrito}
        addProducto={addProducto}
        />
    )) }
    </div>
    );
};
 
export default Carrito;