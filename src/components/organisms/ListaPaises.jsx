//https://styled-components.com/
import React, { useState } from "react";
import styled from "styled-components";
import { v, InputBuscadorLista, ConvertirCapitalize } from "../../index"; //traemos variables de iconos
import iso from "iso-country-currency";

export function ListaPaises({ setSelect, setState }) {
  const isocodigos = iso.getAllISOCodes();
  console.log(isocodigos);
  const [dataresult, setDataresult] = useState([]);
  //seleccionar el pais elegido el cual sera recepcionado en ConfiguracionTemplate
  function seleccionar(p) {
    setSelect(p);
    setState();
  }

  function buscar(e) {
    let filtrado = isocodigos.filter((item) => {
      return item.countryName == ConvertirCapitalize(e.target.value);
    });
    setDataresult(filtrado);
  }

  return (
    <Container>
      <header className="header">
        <span>busca tu país</span>
        <span className="close" onClick={setState}>
          {<v.iconocerrar />}
        </span>
      </header>
      <InputBuscadorLista onChange={buscar} placeholder="buscar..." />
      {dataresult.length > 0 &&
        dataresult.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => seleccionar(item)}>
              <span>{item.countryName}</span>
              <span>{item.symbol}</span>
            </ItemContainer>
          );
        })}
    </Container>
  );
}
const Container = styled.div`
margin-top:10px;
position: absolute;
top: 88%;
width: 100%;
display: flex;
flex-direction: column;
background-color: ${({theme})=> theme.bgtotal};
border-radius: 10px;
border: 3px solid #3a3a3a;
padding: 10px;
gap: 10px;
color: ${({theme})=> theme.text};
font-size: 12px;
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  .close{
    cursor: pointer;
    transition: all 03.s;
    &:hover{
      color: ${()=>v.colorselector};
      transform: scale(1.2);
    }
  }
}





`;
const ItemContainer = styled.section`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #303030;
  }
`;
