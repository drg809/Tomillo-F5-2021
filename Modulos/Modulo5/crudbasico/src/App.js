import './App.css';
import { useState } from 'react';
import shortid from 'shortid';

function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const [editando, setEditando] = useState(false);


  const agregarTarea = (e) => {
    e.preventDefault()
    if (!tarea.trim()) {
      console.log('el campo esta en blanco')
      return
    }

    setTareas([
      ...tareas,
      { tarea, id: shortid.generate() }
    ])
    setTarea('')
  }

  const eliminarTarea = id => {
    const nuevasTareas = tareas.filter(x => x.id !== id)
    setTareas(nuevasTareas)
  }

  const editar = item => {
    setTarea(item.tarea)
    setEditando(true)
  }

  const editarTarea = e => {
    e.preventDefault()
    
    //setTarea(item.tarea)
    setEditando(true)
    //const nuevasTareas = tareas.filter(x => x.id === item.id)
    console.log('hola');
  }


  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD APP</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.tarea}</span>
                  <button
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={() => eliminarTarea(item.id)}
                  >Eliminar</button>
                  <button
                    className="btn btn-sm btn-warning float-right"
                    onClick={() => editar(item)}
                  >Editar</button>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">
            {editando ? 'Editar tarea' : 'Agregar tarea'}
          </h4>
          <form onSubmit={editando ? editarTarea : agregarTarea}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            {editando ?
              (<button className="btn btn-success btn-block" type="submit"> Editar </button>)
              :
              (<button className="btn btn-dark btn-block" type="submit"> Agregar </button>)}

          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
