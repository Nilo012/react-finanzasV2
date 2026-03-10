//https://styled-components.com/
import styled from "styled-components";
import { v, BtnSave } from "../../../index";

export function SidebarCard() {
  return (
    <Container>
      <span className="icon">{<v.iconoayuda />}</span>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Centro de Ayuda</h3>
        <div className="contentBtn">
          <BtnSave titulo="Contactar" bgcolor={v.colorSecundario} />
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;
  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
  .cardContent {
    position: relative;
    padding: 1rem;
    background: ${(props) => props.theme.bg5};
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    .circle1,
    .circle2 {
      position: absolute;
      background: ${(props) => props.theme.whiteBg};
      border-radius: 30%;
      opacity: 0.7;
    }
    .circle1 {
      height: 100px;
      width: 100px;
      top: -50px;
      right: -50px;
    }
    .circle2 {
      height: 130px;
      width: 130px;
      bottom: -80px;
      left: -70px;
      z-index: 1;
    }
    h3 {
      font-size: 1.5rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: #000;
      z-index: 10;
    }
    .contentBtn{
        margin-left: -10px;
        z-index: 90;
    }

  }
`;
