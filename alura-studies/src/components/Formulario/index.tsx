import * as React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botão";
import style from "./Formulario.module.scss";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefas(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state }])
    console.log('state: ',this.state)
}
  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefas.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">adcione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(evento) =>
              this.setState({ tarefa: evento.target.value })
            }
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label>Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
          />
        </div>
        <Botao>Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;
