import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
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

    const novaTarefa = {
      palavra: input,
      data: getCurrentDate(),
      hora: getCurrentTime()
    };

    setTarefas([...tarefas, input]);
    setInput('');
  }

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
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
        <li key={index}>
          <p>Tarefa: {tarefa.palavra}</p>
          <p>Data: {tarefa.data}</p>
          <p>Hora: {tarefa.hora}</p>
        </li>
        ))}
      </ul>

    </div>
    </div>
  );
}

export default App;
