//https://styled-components.com/
import styled from "styled-components";
import { v, LinksArray, SecondarylinksArray, SidebarCard} from "../../../index";
import { NavLink } from "react-router-dom";

export function Sidebar({ state, setState }) {
  return (
    <Main isOpen={state}>
      <span className="Sidebarbutton" onClick={() => setState(!state)}>
        {<v.iconoFlechaderecha />}
      </span>
      <Container isOpen={state} className={state ? "active" : ""}>
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={v.logo} />
          </div>
          <h2>GastoSmart</h2>
        </div>
        {LinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              {state && (<span>{label}</span>)}
            </NavLink>
          </div>
        ))}
        <Divider />
        {SecondarylinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              {state && (<span>{label}</span>)}
            </NavLink>
          </div>
        ))}
        <Divider />
        {state && <SidebarCard/>}
        
      </Container>
    </Main>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 10;
  height: 100%;
  width: 65px;
  transition: 0.3s ease-in-out;
  overflow-y:auto ;
  overflow-x: hidden;
  font-family: "Carter One", system-ui;
  &::-webkit-scrollbar{
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: ${(props)=>props.theme.colorScroll};
    border-radius: 10px;
  }
  &.active {
    width: 220px;
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    gap: 10px;
    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      cursor: pointer;
      transform: ${({ isOpen }) => (isOpen ? `scale(1.4)` : `scale(1.6)`)}
        rotate(${(props) => props.theme.logorotate});
      img {
        width: 100%;
        animation: flotar 1.5s ease-in-out infinite alternate;
      }
    }
    h2 {
      //Si el sidebar está abierto → mostrar el h2
      //Si el sidebar está cerrado → ocultar el h2
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }
  .LinkContainer {
    margin: 5px 0;
    transition: all 0.3s;
    padding: 0 5%;
    position: relative;
    font-size:12px;
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => v.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;
      .Linkicon {
        padding: ${() => v.smSpacing} ${() => v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        color: ${(props) => props.theme.bg5};
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          background: ${(props) => props.theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }
  }
`;

const Main = styled.div`
  .Sidebarbutton {
    position: fixed;
    top: 60px;
    left: 42px;
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.text};
    font-size: ${() => v.mdSpacing};
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg3};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 20;
    transform: ${({ isOpen }) =>
      isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`};
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
