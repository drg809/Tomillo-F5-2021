# Lista de tareas

El ejercicio consiste en crear una lista de tareas básica con Javascript, manipulando el DOM y mostrando la lista de elementos en la web. 
En el archivo JS tenemos:
- Un array de <i>todos</i> donde iremos insertando los elementos que se escriban en el input de texto, al introducir cada elemento se irán mostrando en la web en un listado no numerado (< ul >).
- La función <i>window.onload</i> que se ejecutará cuando la web se haya cargado(accedemos al objeto <i>window</i> que representa la web o la pantalla, en javascript y su atributo <i>onload</i> que indica cuando se haya cargado). Acto seguido se ejecutará el código JS que incluye la función.
- Se captura la etiqueta (o elemento en javascript y en adelante) con id='todo-form' y se guarda en la constante <i>form</i> (<i>const form = document.getElementById('todo-form');</i>) (una constante es una variable como <i>var</i> pero no cambiará de valor una vez asignada).
- Cómo el elemento <i>form</i> es un formulario, puede ejecutarse la función <i>onsubmit</i> cuando se pulse el botón de enviar (si es de tipo submit).
- Se captura el evento <i>onsubmit</i> en la variable <i>e</i> (de evento) para prevenir que se comporte por defecto (<i>e.preventDefault()</i>), ya que si no se actualizará la web, ya que este es su comportamiento básico.
- Se captura el elemento con id='todo', que es el input de texto. (<i>const form = document.getElementById('todo');</i>).
- Se guarda el atributo <i>value</i> de la constante <i>todo</i> obtenida en la línea anterior, en otra constante llamada <i>todoText</i>.
- Se limpia el atributo <i>value</i> de la constante <i>todo</i> asignandole un texto en blanco.
- Se guarda la constante <i>todoText</i> (el texto escrito en el input de texto) en el array de <i>todos</i> mediante su función <i>push</i>.
- Se captura el elemento <i>todo-list</i> (listado de tareas) en una constante llamada <i>todoList</i>.
- Se limpia el html que contiene el elemento <i>todo-list</i> asignando un texto en blanco a su atributo <i>todoList.innerHTML</i>.
- Por ultimo se realiza un iterable o comúmente conocido como bucle <i>for</i>* recorriendo todos los elementos añadidos al array de <i>todos</i>. En cada iteración o etapa del bucle, se añade el elemento iterado en la lista de tareas, representada mediante el listado de <i>todo-list</i> mediante su atributo <i>todoList.innerHTML</i>.

(* Para comprender mejor el bucle <i>for</i> es necesaría una aclaración si no habéis llegado a ese ejercicio, se trata de un función que se ejecutará una vez por cada elemento en el array proporcionado, primero se declara un indice <i>i</i> con el que controlar la vueltas que ha dado, mientras que el indice sea menor que la longitud del array <i>i < todo.lenght</i> se ejecutará la función y se sumará uno al indice <i>i</i> mediante <i>i++</i>).