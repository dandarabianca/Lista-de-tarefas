import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
   /* 'Pagar conta de luz',
    'Estudar React Js',*/
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify('tarefas'))
  }, [tarefas]);

  function handleRegistrar(event) {
    event.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Lista de tarefas!</h1>

      <form onSubmit={handleRegistrar}>
        <label>Tarefas:</label><br />
        <input
          placeholder='Digite uma tarefa'

          value={input}
          onChange={(event) => setInput(event.target.value)}
        /><br />
         <input
         placeholder='Digite a hora da tarefa'
         /><br/>

        <input
         placeholder='Digite a data da tarefa'
         /><br/>
        <button type='submit'>Registrar</button>
      </form>


        
      <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
