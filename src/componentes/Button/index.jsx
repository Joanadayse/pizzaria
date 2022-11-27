import React from "react";
import './styled.js'
import { Botao } from "./styled.js";

const Button = ({ setPagina1}) => {

   
    const mudarDeTela=(pagina)=>{
        setPagina1(pagina)
      
      }

    return (
        <Botao onClick={()=>mudarDeTela(2)}>Adicionar e Continuar</Botao>
    )
}

export default Button