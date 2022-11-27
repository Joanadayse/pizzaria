import React from "react";
import { useState } from "react";
import { BoxFormulario, InputFormulario, BotaoFormulario } from "./styled";


export default function Formulario() {

    const [nome , setNome ]= useState ("")
    const [endereco , setEndereco]= useState ("")
    const [nCasa, setNcasa]= useState ("")
    const [telefone, SetTelefone]= useState("")

    const onChangeNome = (event) =>{
        setNome(event.target.value)
        console.log(nome)
    }

    const onChangeEndereco=(event) =>{
        setEndereco(event.target.value)
        console.log(endereco)
    }

    const onChangeNumeroCasa =(event) => {
        setNcasa(event.target.value)
        console.log(nCasa)
    }

    const onChangeTelefone = (event) =>{
        SetTelefone (event.target.value)
        console.log(telefone)
    }
  
    // para nao recarregar a pagina depois de finalizar o pedido
    const previneRecaregar =(event) =>{
        event.preventDefault()
        alert ("Obrigada pelo pedido")
    }
    return (
        <>
            <BoxFormulario>
                <InputFormulario type='text' placeholder="Nome Completo" required onChange={onChangeNome}/>
                <InputFormulario type='text' placeholder="Endereço" required onChange={onChangeEndereco} />
                <InputFormulario type='text' placeholder="nº da casa" required onChange={onChangeNumeroCasa}/>
                <InputFormulario type='text' placeholder="Telefone" required onChange={onChangeTelefone}/>
                <BotaoFormulario onClick={previneRecaregar }>Finalizar Pedido</BotaoFormulario>
            </BoxFormulario>
        </>
    )
}