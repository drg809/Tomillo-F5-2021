const todos = [{
        'titlo': "Ir a escalar al puente",
        'description': 'EN el puente del alamillo',
        'fecha': '13/05/2021'
    },
    {
        'titlo': "Ir a escalar al puente",
        'description': 'EN el puente del alamillo',
        'fecha': '13/05/2021'
    },
    {
        'titlo': "Ir a escalar al puente",
        'description': 'EN el puente del alamillo',
        'fecha': '13/05/2021'
    }

];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        const todoList = document.getElementById('todo-list');
        console.log(todoList.innerHTML);
        for (let i = 0; i < todos.length; i++) {
            todoList.innerHTML += '<li>' + todos[i] + '</li>';
            console.log(todoList.innerHTML);
        }
    }
}