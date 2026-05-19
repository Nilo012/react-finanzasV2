//https://styled-components.com/
import styled from "styled-components";
import {
  Header,
  ContentFiltros,
  BtnDesplegable,
  useOperaciones,
  ListaMenuDesplegable,
  DataDesplegableTipo,
  Btnfiltro,
  v,
} from "../../index";
import { useState } from "react";

export function CategoriasTemplate() {
  const [state, setState] = useState(false); //manejo de estados
  //1.manejo de estados por tipo
  const [stateTipo, setStateTipo] = useState(false);
  const { colorCategoria, tituloBtnDes, bgCategoria, setTipo } =
    useOperaciones();
  function cambiarTipo(p) {
    setTipo(p);
    setStateTipo(!stateTipo);
    setState(false); //evitar q se despliegen mas de 2 listas la vez
  }
  //cerrar desplegables
  function cerrarDesplegable() {
    setStateTipo(false);
    setState(false);
  }
  //evitar q se despliegen mas de 2 listas la vez
  function openTipo() {
    setStateTipo(!stateTipo);
    setState(false);
  }
  function openUser() {
    setState(!state);
    setStateTipo(false);
  }

  return (
    <>
      <Container onClick={cerrarDesplegable}>
        <header className="header">
          <Header stateConfig={{ state: state, setState: openUser }} />
        </header>

        <section className="tipo">
          <ContentFiltros>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <BtnDesplegable
                textcolor={colorCategoria}
                bgcolor={bgCategoria}
                text={tituloBtnDes}
                funcion={openTipo}
              />
              {stateTipo && (
                <ListaMenuDesplegable
                  data={DataDesplegableTipo}
                  top="112%"
                  funcion={(p) => cambiarTipo(p)}
                />
              )}
            </div>
          </ContentFiltros>
        </section>
        <section className="area2">
          <ContentFiltro>
            <Btnfiltro bgcolor={bgCategoria} textcolor={colorCategoria} icono={<v.agregar/>}/>
          </ContentFiltro>

        </section>
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
    justify-content: end;
  }
  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;

const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
`
