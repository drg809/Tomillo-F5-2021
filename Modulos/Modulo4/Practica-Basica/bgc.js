// capturamos el botón de color aleatorio y el body y los guardamos en variables
var btn = document.getElementById('bgc');
var body = document.getElementById('body');

// escuchamos el evento click del botón
btn.addEventListener('click', function() {
    // obtenemos 6 números hexadecimales y los guardamos en la variable randomColor y los guardamos en variables
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // asignamos el color al background-color del body
    body.style.backgroundColor = '#' + randomColor;
    // capturamos el elemento p que muestra el color elegido y los guardamos en variables
    var textoColor = document.getElementById('textoColor');
    // insertamos el color elegido en el html de nuestro elemento p para mostrarlo
    textoColor.innerHTML = 'Color: #' + randomColor;

});

// capturamos el botón de poner el color blanco
var colorBlanco = document.getElementById('bgcReset');

// escuchamos el evento click del botón
colorBlanco.addEventListener('click', function() {
    // asignamos el color blanco al background color del body
    body.style.backgroundColor = '#ffffff';
    // capturamos el elemento p que muestra el color elegido y los guardamos en variables
    var textoColor = document.getElementById('textoColor');
    // insertamos el color blanco en el html de nuestro elemento p para mostrarlo
    textoColor.innerHTML = 'Color: #ffffff';

});