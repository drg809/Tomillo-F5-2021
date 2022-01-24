var form = document.getElementById('formInput');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var input = document.getElementById('todo');
    console.log(input.value);

    var textoInput = document.getElementById('textoInput');
    textoInput.innerHTML = 'Valor: ' + input.value;
});