import Footer from "./componentes/Footer/index.jsx";
import { GlobalStyle } from "./GlobalStyle.js";
import Formulario from "./componentes/Formulario/index.jsx";
import HeaderSimples from "./componentes/HeaderSimples/index.jsx";
import Header from "./componentes/Header"
import Menu from "./componentes/Menu"
import { useState } from "react";
import calabresa from "./img/pizza-calabresa.png"
import portuguesa from "./img/portu.jpg"
import frango from "./img/frango.jpg"



function App() {
  const [pagina , setPagina]= useState (0)
 
  const  pizza1= {
    sabor: "Frango",
    preco: 23,
    imagem: frango
  };

  const pizza2={
    sabor:"calabresa",
    preco: 25,
    imagem: calabresa
  }

  const pizza3={
    sabor:"portuguesa",
    preco: 25,
    imagem: portuguesa
  }
 
  return (
    <div>
      <GlobalStyle />
      {
        pagina === 0 ? 
        <>
        <HeaderSimples />
      <Header/>
     
      <Menu  pizza1={pizza1} pizza2={pizza2} pizza3={pizza3} pagina={pagina} setPagina={setPagina}/>
      
      </>

      
      : 
      <>
      <Formulario />
      <Footer />
      </>
        
      }
      
    </div>
  );
}

export default App;
