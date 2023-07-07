import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [time, setTime ] = useState('');
  const [date,setDate ] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
  
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  
  }, []);
  

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegistrar(event) {
    event.preventDefault();

    const novaTarefa = {
      palavra: task,
      data: date,
      hora: time
    };

    setTarefas([...tarefas, novaTarefa]);
    setTask('');
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
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />

            <label htmlFor="hour">Hora:</label>
            <input
              id="hour"
              type='time'
              placeholder='Digite a hora da tarefa'
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <label htmlFor="date">Data:</label>
            <input
              id="date"
              type="date"
              placeholder='Digite a data da tarefa'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button type='submit'>Registrar</button>
          </form>
        </div>
        <ul>
          
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              <span>Tarefa: {tarefa.palavra}</span>
              <span>Data: {tarefa.data}</span>
              <span>Hora: {tarefa.hora}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
