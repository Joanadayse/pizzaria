import React from 'react'
import { DivMenu, MenuCards} from './styled'
import Card from "../Card"
import Button from '../Button'

const Menu = (props) => {
    return <>
    <DivMenu> <h3>Menu:</h3></DivMenu>
    <MenuCards>
        <Card pizza={props.pizza1}/>
        <Card pizza={props.pizza2}/>
        <Card pizza={props.pizza3}/>
    </MenuCards>
 <Button setPagina1={props.setPagina}/>
</>


}

export default Menu

// o menu envia para o Card (seu filho)
