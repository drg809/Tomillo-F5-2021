import React from 'react';


function hola(){
   console.log('funcion hola');
}
const hola1 = () => {
   console.log('funcion flecha');
}

const HolaCoders = () => {
   hola1();
   hola();
   console.log('hola coders');
   return (
      <>
         <div>Hola</div>
         <p>Introducción a React</p>
      </>
   );
};


export default HolaCoders;