import * as React from "react";
import style from "./Lista.module.scss";
import Item from "./item";

function Lista() {
  let tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={()=> {
        console.log("h2 clicado", tarefas)
        tarefas = [...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} tarefa={item.tarefa} tempo={item.tempo}/>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
