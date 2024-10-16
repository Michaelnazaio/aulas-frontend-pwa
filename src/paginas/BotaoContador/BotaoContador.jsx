import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import Principal from "../../comum/componentes/Principal/Principal";



const BotaoContador = () => {
    const [ numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1);
    };

    const decrementar = () => {
        setNumero(numero - 1);
    }


    return (
        <Principal titulo="Botão Contador" voltarPara="/">
            <br />
            <br />
            <BotaoCustomizado aoClicar={incrementar} cor="primaria"><h1> + 1</h1>
                
            </BotaoCustomizado>

            <h1>O número é: {numero}</h1>

            <BotaoCustomizado aoClicar={decrementar} cor="primaria"><h1> - 1</h1>
                
            </BotaoCustomizado>
        </Principal>
    );
};

export default BotaoContador;
