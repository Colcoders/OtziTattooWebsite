import React from "react";

const Header = () => {
  return(
    <header class="border-b-2 bg-red-200 py-4">
      <nav>
        <ul class="flex justify-center">
          <li class="ListaElemento"><a href="google.com">Inicio</a></li>
          <li class="ListaElemento"><a href="google.com">Servicios</a></li>
          <li class="ListaElemento"><a href="google.com">Ventas</a></li>
          <li class="ListaElemento"><a href="google.com">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
