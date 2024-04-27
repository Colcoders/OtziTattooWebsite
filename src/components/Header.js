import React from "react";

const Header = () => {
  return(
    <header class="border-b-2 border-sky-500">
      <nav>
        <ul class="flex justify-center">
          <li class="ListaElemento"><a href="#">Inicio</a></li>
          <li class="ListaElemento"><a href="#">Servicios</a></li>
          <li class="ListaElemento"><a href="#">Ventas</a></li>
          <li class="ListaElemento"><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
