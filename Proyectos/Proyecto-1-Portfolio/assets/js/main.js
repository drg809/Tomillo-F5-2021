window.onload = () => {
   //capturamos el formulario
   const form = document.getElementById("form");
   const noti = document.getElementById("noti");

   //escuchamos el evento submit o onsubmit (pulsar el boton de enviar)
   form.addEventListener("submit", (e) => {
      //evitamos el comportamiento por defecto
      e.preventDefault();

      //capturamos los inputs de texto
      let name = document.getElementById("inputName").value;
      let email = document.getElementById("inputEmail").value;
      let text = document.getElementById("inputTextarea").value;

      //función para descargar el archivo
      function download(filename, text) {
         var element = document.createElement('a');
         element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
         element.setAttribute('download', filename);

         element.style.display = 'none';
         document.body.appendChild(element);

         element.click();

         document.body.removeChild(element);
      }

      //constrimos la variable de texto
      let tempText = `
         Emisor: ${name}, \n
         Email: ${email},\n
         Mensaje: ${text}`;

      //invocamos la funcion para descargar el archivo
      download("email.txt", tempText);

      //ahora hay que mostrar un mensaje en la pantalla, os toca hacerlo a vosotros
      noti.style.display = 'inline';
      //código que se ejecuta a los tres segundos de haber sido leido
      setTimeout(function () {
         noti.style.display = 'none';
      }, 5000);
   });

   // When the user scrolls the page, execute myFunction
   window.onscroll = function () { 
      myFunction();
   };

   console.log(window)
   // obtenemos el elemento header
   var header = document.getElementById("navbar__header");

   // sacamos la posición del scroll en la página
   var sticky = header.offsetTop;

   // añadimos la clase sticky o la eliminamos en función de la posición del scroll en la página
   function myFunction() {
      if (window.scrollY >= 100) {
         header.classList.add("sticky");
      } else {
         header.classList.add("sticky");
      }
   }
   document.getElementById('noti__close').addEventListener('click', () => {
      noti.style.display = 'none';
   })
}