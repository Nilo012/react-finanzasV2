//https://styled-components.com/
import styled from "styled-components";
import {
  Header,
  Selector,
  v,
  ListaPaises,
  useUsuariosStore,
} from "../../index";
import { useState } from "react";

export function ConfiguracionTemplate() {
  const {datausuarios} = useUsuariosStore();

  const [select, setSelect] = useState([]); //manejo de estados para selccionar moneda
  const [state, setState] = useState(false); //manejo de estados

  const [stateListaPaises, setStateListaPaises] = useState(false); //manejo de estados paises

  const moneda = select.symbol?select.symbol:datausuarios.moneda;
  const pais = select.countryName?select.countryName:datausuarios.pais;
  const paisSeleccionado = "🤑" + moneda + "  " + pais;
  return (
    <>
      <Container>
        <header className="header">
          <Header
            stateConfig={{ state: state, setState: () => setState(!state) }}
          />
        </header>
        <section className="area1">
          <h1>Ajustes</h1>
        </section>
        <section className="area2">
          <ContentCard>
            <span>Moneda:</span>
            <Selector
              state={stateListaPaises}
              color={v.colorselector}
              texto1={paisSeleccionado}
              funcion={() => setStateListaPaises(!stateListaPaises)}
            />
            {stateListaPaises && (
              <ListaPaises
                setSelect={(p) => setSelect(p)}
                setState={() => setStateListaPaises(!stateListaPaises)}
              />
            )}
          </ContentCard>
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
    "area1" 100px
    "area2" 50px
    "main" auto;
  font-size: 12px;

  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
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
const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;
