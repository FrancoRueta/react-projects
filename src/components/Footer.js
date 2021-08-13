import React from 'react';


const Footer = ({fecha}) => {
    return ( 
        <footer>
            <p>Todos los derechos reservados &copy;</p>
            <p>{fecha}</p>
        </footer>
     );
}
 
export default Footer;
