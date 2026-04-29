import React, { useState } from "react";
import styled from "styled-components";
import { v, InputBuscadorLista, Device, BtnCerrar } from "../../index";
import iso from "iso-country-currency";

export function ListaPaises({ setSelect, setState }) {
  const isocodigos = iso.getAllISOCodes();

  // 🔥 empieza vacío (NO mostrar todo)
  const [dataresult, setDataresult] = useState([]);

  // seleccionar país
  function seleccionar(p) {
    setSelect(p);
    setState(false);
  }

  // 🔎 buscador real
  function buscar(e) {
    const value = e.target.value.toLowerCase().trim();

    // si está vacío no muestra nada
    if (value === "") {
      setDataresult([]);
      return;
    }

    const filtrado = isocodigos.filter((item) =>
      item.countryName.toLowerCase().includes(value),
    );

    setDataresult(filtrado);
  }

  return (
    <Container>
      <header className="titulo">
        <span>busca tu país</span>
        {/*<span className="close" onClick={() => setState(false)}>
          {<v.iconocerrar />}
        </span>*/}
        <BtnCerrar funcion={setState}/>
      </header>

      <InputBuscadorLista onChange={buscar} placeholder="buscar..." />

      {/* 🔥 solo mostrar si hay resultados */}
      {dataresult.length > 0 &&
        dataresult.map((item, index) => (
          <ItemContainer key={index} onClick={() => seleccionar(item)}>
            <span>{item.countryName}</span>
            <span>{item.symbol}</span>
          </ItemContainer>
        ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgtotal};
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  z-index: 10;
  @media ${Device.tablet} {
    width: 400px;
  }
  .titulo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.body};
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
    background-color: ${({theme})=>theme.bgtotal};
  }
`;

