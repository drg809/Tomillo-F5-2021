# Lista de tareas avanzada

El ejercicio consiste en crear una lista de tareas avanzada con Javascript, manipulando el DOM y mostrando la lista de elementos en la web. En ella podremos eliminar objetos de la lista y almacenarla en la caché del navegador para que se guarden los datos si refrescamos o cerramos el navegador (se dice que los datos persisten) (lo haremos manipulando el objeto <i>localStorage</i>). Cada elemento se borrará al pulsar sobre él mismo en la lista.
En el archivo JS tenemos:
- Un array de <i>todos</i> donde iremos insertando los elementos que se escriban en el input de texto, al introducir cada elemento se irán mostrando en la web en un listado no numerado (< ul >). Si hemos almacenado algún listado en caché lo recogeremos mediante la función <i>localStorage.getItem('todos')</i>. Como este listado es un string de JSON (un objeto JSON hecho string) hay que convertirlo a objeto mediante la función <i>JSON.parse()</i>.

- Definimos la constante <i>render</i> que es una función de flecha (o arrow function) declarada mediante los signos <i>() => {}</i>. Esta función se ejecutará cada vez queramos actualizar la lista de tareas (<i>< ul id="todo-list" ></i>).
- Se captura el elemento <i>todo-list</i> (listado de tareas) en una constante llamada <i>todoList</i>.
- Se crea un .map en la constante  <i>todosTemplate</i> con el array <i>todos</i> listando cada uno con la siguiente función <i>todos.map(t => '<li>' + t + '</li>')</i> (donde 't' es el elemento del array en cada ciclo).
- Se crea una cadena de texto a partir del elemento <i>todosTemplate</i> mediante <i>todosTemplate.join('')</i> y lo asignamos al HTML mostrado en <i>todoList</i> mediante el atributo <i>todoList.innerHTML</i>.
- Mediante el selector <i>document.querySelectorAll()</i> que permite seleccionar todos los elementos que coincidan con la clave, se capturan todos los elementos del listado ('#todo-list li') y se guardan en la constante <i>elementos</i>.
- A continuación se recorre el array <i>elementos</i> con un bucle forEach y creamos un evento de escucha para cada uno <i>elemento.addEventListener('click', () => {})</i> que al hacer click ejecutará una función de flecha descrita en las siguientes líneas.
- Se remueve el elemento clickado de su padre mediante el atributo <i>parentNode</i> que nos da el padre y la función <i>removeChild()</i>.
- Se elimina dicho elemento del array <i>todos</i> mediante la función <i>splice()</i> donde se pasa el índice del elemento a eliminar y el número de elementos a eliminar.
- Actualizamos el listado guardado en memoria mediante la función <i>actualizaTodos(todos)</i> declarada más abajo.
- Llamamos a la función <i>render()</i> para actualizar el listado. Recordemos que es esta misma función, esto se conoce cómo recursividad.

- Definimos una función de flecha y se almacena en la constante <i>actualizaTodos(todos)</i>.
- El parametro recibido (array de todos) se convierte a un string JSON mediante la función <i>JSON.stringify(todos)</i> y se almacena en la constante <i>todoStrings</i>.
- Persistimos en memoria (se guarda en la caché del navegador) la cadena de texto <i>todoStrings</i> mediante la función <i>localStorage.setItem()</i> (primero se introduce el nombre por el que se guardará y segundo la cadena).

- La función <i>window.onload</i> que se ejecutará cuando la web se haya cargado(accedemos al objeto <i>window</i> que representa la web o la pantalla, en javascript y su atributo <i>onload</i> que indica cuando se haya cargado). Acto seguido se ejecutará el código JS que incluye la función.
- Se ejecuta la función <i>render()</i>.
- Se captura la etiqueta (o elemento en javascript y en adelante) con id='todo-form' y se guarda en la constante <i>form</i> (<i>const form = document.getElementById('todo-form');</i>).
- Cómo el elemento <i>form</i> es un formulario, puede ejecutarse la función <i>onsubmit</i> cuando se pulse el botón de enviar (si es de tipo submit).
- Se captura el evento <i>onsubmit</i> en la variable <i>e</i> (de evento) para prevenir que se comporte por defecto (<i>e.preventDefault()</i>), ya que si no se actualizará la web, ya que este es su comportamiento básico.
- Se captura el elemento con id='todo', que es el input de texto. (<i>const form = document.getElementById('todo');</i>).
- Se guarda el atributo <i>value</i> de la constante <i>todo</i> obtenida en la línea anterior, en otra constante llamada <i>todoText</i>.
- Se limpia el atributo <i>value</i> de la constante <i>todo</i> asignandole un texto en blanco.
- Se guarda la constante <i>todoText</i> (el texto escrito en el input de texto) en el array de <i>todos</i> mediante su función <i>push</i>.
- Se llama a la función <i>actualizaTodos()</i> y se le pasa como parámetro el nuevo array de <i>todos</i>.
- Se actualiza todo llamando a la función <i>render()</i>.