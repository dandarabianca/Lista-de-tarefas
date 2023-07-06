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
    <div className='containerCenter'>
      <h1>Lista de tarefas!</h1>
      <div className='items'>
        <div className='inputs'>
      <form onSubmit={handleRegistrar}>
        <label>Tarefas:</label>
        <input
          placeholder='Digite uma tarefa'

          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <label for="hour">Hora:</label>
         <input
         id="hour"
         type='time'
         placeholder='Digite a hora da tarefa'
         />
        <label for="date">Date:</label>
        <input
        id="date"
        type="date"
         placeholder='Digite a data da tarefa'
         />
        <button type='submit'>Registrar</button>
      </form>
      </div>
      <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
        ))}
      </ul>

    </div>
    </div>
  );
}

export default App;
