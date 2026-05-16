//https://styled-components.com/
import styled from "styled-components";
import {
  Header,
  ContentFiltros,
  BtnDesplegable,
  useOperaciones,
  ListaMenuDesplegable,
  DataDesplegableTipo,
} from "../../index";
import { useState } from "react";

export function CategoriasTemplate() {
  const [state, setState] = useState(false); //manejo de estados
  const { colorCategoria, tituloBtnDes, bgCategoria, setTipo } = useOperaciones();
  function cambiarTipo(p){
    setTipo(p)
  }

  return (
    <>
      <Container>
        <header className="header">
          <Header
            stateConfig={{ state: state, setState: () => setState(!state) }}
          />
        </header>

        <section className="tipo">
          <ContentFiltros>
            <BtnDesplegable textcolor={colorCategoria} bgcolor={bgCategoria} text={tituloBtnDes}  />
            <ListaMenuDesplegable data={DataDesplegableTipo} top="112%" funcion={(p)=>cambiarTipo(p)}/>
          </ContentFiltros>
        </section>
        <section className="area2">area2</section>
        <section className="main">area3</section>
      </Container>
    </>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "tipo" 100px
    "area2" 50px
    "main" auto;

  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }
  .tipo {
    grid-area: tipo;
    background-color: rgba(229, 67, 25, 0.14);
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
  }
  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;
