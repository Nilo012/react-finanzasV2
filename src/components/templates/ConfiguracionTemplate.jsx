//https://styled-components.com/
import styled from "styled-components";
import {
  Header,
  Selector,
  v,
  ListaPaises,
  useUsuariosStore,
  ListaGenerica,
  TemasData, //viene de datastatic(clik derecho en temasData go definition)
  BtnSave,
} from "../../index";
import { useState } from "react";

export function ConfiguracionTemplate() {
  //3.agrgamos editarmoneda y tema
  const { datausuarios,editartemamonedauser } = useUsuariosStore();

  const [select, setSelect] = useState([]); //manejo de estados para seleccionar moneda
  const [selectTema, setSelecttema] = useState([]); //*manejo d estado para el tema claro/oscuro
  const [state, setState] = useState(false); //manejo de estados

  const [stateListaPaises, setStateListaPaises] = useState(false); //manejo de estados paises
  const [stateListaTemas, setStateListaTemas] = useState(false); //*lista de temas
  //pais mmoneda
  const moneda = select.symbol ? select.symbol : datausuarios.moneda;
  const pais = select.countryName ? select.countryName : datausuarios.pais;
  const paisSeleccionado = "🤑" + moneda + "  " + pais;

  //tema light y dark
  const iconobd = datausuarios.tema === "0" ? "☀️" : "🌚";
  const temabd = datausuarios.tema === "0" ? "light" : "dark";
  const temainicial = selectTema.tema ? selectTema.tema : temabd;
  const iconinicial = selectTema.icono ? selectTema.icono : iconobd;
  const temaSeleccionado = iconinicial + " " + temainicial;

  //3.funcion editar tema y moneda
  const editar = async()=>{
    const themeElegido = selectTema.descripcion==="light"?"0":"1"
    const p ={
      //3.la palabra tema,moneda,pais,id es igual q el nombre de atributo q esta en la tabla usuarios
      tema:themeElegido,
      moneda:moneda,
      pais: pais,
      id: datausuarios.id
    }
    await editartemamonedauser(p);
  }

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

          {/**despelgable temas light/dark */}
          <ContentCard>
            <span>Tema:</span>
            <Selector
              texto1={temaSeleccionado}
              color={v.colorselector}
              state={stateListaTemas}
              funcion={() => setStateListaTemas(!stateListaTemas)}
            ></Selector>

            {/**temas light/dark(data estatica en temasdata) y close */}
            {stateListaTemas && (
              <ListaGenerica
                data={TemasData}
                setState={() => setStateListaTemas(!stateListaTemas)}
                funcion={setSelecttema}
              />
            )}
          </ContentCard>
          <BtnSave
            titulo="Guardar"
            bgcolor={v.colorselector}
            icono={<v.iconoguardar />} funcion={editar}
          />
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
    justify-content: center;
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
    flex-direction: column; //posicionamiento vertical
    justify-content: start;
    gap: 30px;
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
