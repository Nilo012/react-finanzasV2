//https://styled-components.com/
import styled from "styled-components";
import { BtnSave, v, useAuthStore } from "../../index";

export function LoginTemplate() {
  const {signInWithGoogle} = useAuthStore();
  return (
    <>
      <Container $imgfondo={v.imagenfondo}>
        <div className="contentCard">
          <span className="version">version 2.0</span>
          <div className="contentImg">
            <img src={v.logo} />
          </div>
          <Titulo>Mis Finanzas</Titulo>
          <p className="frase">Tus gastos 💸 e ingresos 💰 bajo control</p>
          <ContainerBtn>
            <BtnSave
              titulo={"Iniciar con Google"}
              icono={<v.iconogoogle />}
              bgcolor={v.colorSecundario}
              funcion={signInWithGoogle}
              
            />
          </ContainerBtn>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  background-image: url(${(props) => props.$imgfondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c6ffe6;
  text-align: center;
  font-family: "Carter One", system-ui;
  .contentCard {
    background-color: #1e1e1e;
    border-radius: 20px;
    gap: 3rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 2rem;
    box-shadow: 8px 5px 18px rgba(0, 0, 0, 0.35);
    .version {
      color: #454545;
      text-align: start;
    }
    .contentImg img {
      max-width: 60%;
      animation: flotar 1.5s ease-in-out infinite alternate;
    }
    .frase {
      font-size: 1.5rem;
      color: #9fd9c4;
    }
  }

  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;
