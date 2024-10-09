import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css';

function Principal() {
  return <main className='principal_root'>Principal
    <BotaoCustomizado
      cor="primaria"
      aoClicar={() => alert("Clicou no botão")}
    >Botão primário
    </BotaoCustomizado>

    <BotaoCustomizado
      cor="secundaria"
      aoClicar={() => alert("Clicou no botão")}
    >Botão secundário
    </BotaoCustomizado>

    <BotaoCustomizado
      cor="terciaria"
      aoClicar={() => alert("Clicou no botão")}
    >Botão terciário
    </BotaoCustomizado>

    <BotaoCustomizado
      aoClicar={() => alert("Clicou no botão")}
    >Botão 
    </BotaoCustomizado>

  </main>;

}

export default Principal;
