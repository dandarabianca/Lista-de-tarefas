import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [tarefasProntas, setTarefasProntas] = useState([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegistrar(event) {
    event.preventDefault();

    const novaTarefa = {
      palavra: task,
      data: date,
      hora: time,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTask("");
  }


  function handleTask(novaTarefa) {
    setTarefas((tarefas) => tarefas.filter((tarefa) => tarefa !== novaTarefa));
    setTarefasProntas((tarefasProntas) => [...tarefasProntas, novaTarefa]);
  }

  return (
    <div className="containerCenter">
      <div className="items">
        <div className="inputs">
          <form onSubmit={handleRegistrar}>
            <label>Tarefas:</label>
            <input
              className="inputsItems"
              placeholder="Digite uma tarefa"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />

            <label htmlFor="hour">Hora:</label>
            <input
              className="inputsItems"
              id="hour"
              type="time"
              placeholder="Digite a hora da tarefa"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <label htmlFor="date">Data:</label>
            <input
              className="inputsItems"
              id="date"
              type="date"
              placeholder="Digite a data da tarefa"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button className="buttonAdd" type="submit">
              Adicionar
            </button>
          </form>
        </div>
        <div className="tarefasConteiner">
          <h1>Lista de tarefas!</h1>
          <h2>Tarefas para fazer: </h2>
          <div className="tarefasMap">
            <ul>
              {tarefas.map((tarefa, index) => (
                <li key={index}>
                  <button type="submit">x</button>
                  <span>Tarefa: {tarefa.palavra}</span>
                  <span>Data: {tarefa.data}</span>
                  <span>Hora: {tarefa.hora}</span>

                  <input
                    className="buttonStyle"
                    type="checkbox"
                    value={tarefa}
                    onChange={() => handleTask(tarefa)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="tarefasProntas">
            <h2>Prontas: </h2>
            {tarefasProntas && tarefasProntas.length > 0 ? (
              tarefasProntas.map((tarefaPronta, index) => (
                <div key={index}>
                  <div className="styleTarefa">
                  <span>Tarefa: {tarefaPronta.palavra}</span>
                  <span>Data: {tarefaPronta.data}</span>
                  <span>Hora: {tarefaPronta.hora}</span>
                  </div>
                </div>
              ))
            ) : (
              <div>Não há tarefas prontas.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
