import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';

import './PaginaInicial.css';

const PaginaInicial = () => {
    const navigate = useNavigate();

    return (
    <Principal titulo={"Página inicial"}>
        <BotaoCustomizado
            cor="primaria"
            aoClicar={() => navigate('/lista-produtos')}
        >Lista Produtos

        </BotaoCustomizado>

        <BotaoCustomizado
            cor="secundaria"
            aoClicar={() => navigate('/botao-contador')}
        >Botão Contador

        </BotaoCustomizado>

        <BotaoCustomizado
            cor="primaria"
            aoClicar={() => navigate('/lista-tarefas')}
        >Lista de Tarefas sdasd

        </BotaoCustomizado>


        {/* <BotaoCustomizado
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
        >Botão mugiwara
        </BotaoCustomizado> */}

    </Principal>
    )
};

export default PaginaInicial;