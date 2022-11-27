import React from "react"
import Button from "../Button"
import { CardEstilizado, TextoH4, ImagemCard, TextoValor, TextoParagrafo, Etiqueta, CheckBox } from "./styled"

const Card = (props) => {

   

    return (
        <div>
            <CardEstilizado>
                <TextoParagrafo>Sabor:</TextoParagrafo>

                <TextoH4>{props.pizza.sabor}</TextoH4>

                <ImagemCard src={props.pizza.imagem}/>

                <TextoValor>Preço: {props.pizza.preco}</TextoValor>

                <TextoParagrafo>Tamanho:</TextoParagrafo>

                <CheckBox>

                    <Etiqueta>
                        <input type="checkbox" />
                        Pequena
                    </Etiqueta>

                    <Etiqueta>
                        <input type="checkbox" />
                        Média
                    </Etiqueta>

                    <Etiqueta>
                        <input type="checkbox" />
                        Grande
                    </Etiqueta>
                </CheckBox>

            </CardEstilizado>
            {/* <Button /> */}
        </div>
    )
}

export default Card


// o Card recebe do Menu (pai de Card e filho de App)