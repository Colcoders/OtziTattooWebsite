import React from "react";
import Typewriter from 'typewriter-effect'

const Welcome = () => {
  return(
    <div class="w-full bg-sky-400 bienvenida">
      <div class="typewritter">
        <Typewriter
          onInit={escritura => {
          escritura
            .typeString('Otzi Tattoo')
            .start()
          }}
        />
      </div> 
    </div>
  );
};

export default Welcome
