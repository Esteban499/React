import './estilos.css'

function App() {

  return (
    <div className="App">
      <h1>LISTA DE TAREAS DE ESTEBAN</h1>
      
      {/* Boton y Entrada*/}
      
      <form action="enviar-respuesta/">
        <div className="contenedor1">
          <input type="text" placeholder="Ingrese una tarea" required/>
          <button type="submit"> ADD </button>
        </div>
      </form>
     


      {/* Elementos de lista */}
      
      <form>
        <div className="contenedor2">
          <br />
          <label> <input type="checkbox" name="tarea" id="task n" /> Task N </label>
          <br />
          <label><input type="checkbox" name="tarea" id="task n-1" /> Task N-1  </label>
          <br />
          <label> <input type="checkbox" name="tarea" id="completed task n-2" /> <s>Completed Task N-2</s>  </label>
          <br />
          <label><input type="checkbox" name="tarea" id="task k" /> Task K</label>
          <br />
          <label><input type="checkbox" name="tarea" id="task 2" /> Task 2</label>
          <br />
          <label><input type="checkbox" name="tarea" id="completed task 1" /> <s>Completed Task 1</s></label>
          
        </div>
      </form>
      

    </div>
  )
}

export default App
