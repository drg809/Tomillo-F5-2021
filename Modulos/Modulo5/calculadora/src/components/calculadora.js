import React, { useState, useEffect } from 'react';

const Calculadora = () => {
   const [count, setCount] = useState(0);
   const [username, setUsername] = useState(0);
   const [peliculas, setPeliculas] = useState([]);

   const peliculasHTML = [];

   const titanic = () => {
      setCount(count+1)
   }

   const avatar = () => {
      setUsername(username+1)
   }

   useEffect(() => {
      
      for(let i=0;i<peliculas.length;i++){
         peliculasHTML.push(
            '<div></div>'
         )
      }
  
   }, [count]);


   
   // useEffect(() => {
      
   //    setCount(username+1)
  
   // }, [username]);

   return (
      <>
         <button onClick={titanic}>
            Titanic
         </button>
         <button onClick={avatar}>
            Avatar
         </button>
         Peliculas de titanic {count}
         Peliculas de avatar {username}
         {peliculasHTML}
      </>
      // <table id="calculadora">
      //    <tbody>
      //       <tr>
      //          <td colSpan="4">
      //             <span className='cajita_valor'>

      //             </span>
      //          </td>
      //       </tr>
      //       <tr>
      //          <td colSpan="2">
      //             <input type="Button" id="potencia" value="exp" className="boton_largo funcion" onClick={operar()} />
      //          </td>
      //          <td>
      //             <input type="Button" id="Dividir" value="/" className="boton funcion" onClick={operar()} />
      //          </td>
      //          <td>
      //             <input type="Button" id="Multiplicar" value="x" className="boton funcion" onClick={operar()} />
      //          </td>
      //       </tr>
      //       <tr>
      //          <td>
      //             <input type="Button" id="7" value="7" className="boton" onClick={operar('7')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="8" value="8" className="boton" onClick={operar('8')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="9" value="9" className="boton" onClick={operar('9')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="Restar" value="-" className="boton funcion" onClick={operar(2)} />
      //          </td>
      //       </tr>
      //       <tr>
      //          <td>
      //             <input type=" Button" id="4" value="4" className="boton" onClick={operar('4')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="5" value="5" className="boton" onClick={operar('5')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="6" value="6" className="boton" onClick={operar('6')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="Sumar" value="+" className="boton funcion" onClick={operar(1)} />
      //          </td>
      //       </tr>
      //       <tr>
      //          <td>
      //             <input type="Button" id="1" value="1" className="boton" onClick={operar('1')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="2" value="2" className="boton" onClick={operar('2')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="3" value="3" className="boton" onClick={operar('3')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="igual" value="=" className="boton funcion" onClick={operar()} />
      //          </td>
      //       </tr>
      //       <tr>
      //          <td colSpan="2">
      //             <input type="Button" id="0" value="0" className="boton_largo" onClick={operar('0')} />
      //          </td>
      //          <td>
      //             <input type="Button" id="," value="," className="boton" onClick={operar()} />
      //          </td>
      //          <td>
      //             {/* <input type="Button" id="C" value="C" className="boton funcion" onClick={clear()} /> */}
      //          </td>
      //       </tr>
      //    </tbody>
      // </table>
   );
};

export default Calculadora;