import * as React from 'react';
import style from './botao.module.scss';

class Botao extends React.Component {
  render() {
      
      return(
            <button className={style.botao}>
                Enviar
            </button>
      )
  }
}


export default Botao;