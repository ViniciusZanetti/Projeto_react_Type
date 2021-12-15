import Botao from "../Botão";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
import tempoParaSegundos from "../../common/utils/Date";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>(
    tempoParaSegundos(String(selecionado?.tempo))
  );

  useEffect(() => {
    if(selecionado?.tempo){
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  },[selecionado])
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar!</Botao>
    </div>
  );
}
