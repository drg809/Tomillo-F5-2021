window.onload = () => {
   //capturamos el formulario
   let form = document.getElementById("form");

   //código que se ejecuta a los tres segundos de haber sido leido
   setTimeout(() => {
      console.log('hola coders')     
   }, 3000);

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
       
         element.style.display = 'block';
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
      download("email.txt",tempText);

      //ahora hay que mostrar un mensaje en la pantalla, os toca hacerlo a vosotros

   });
}