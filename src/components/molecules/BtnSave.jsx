//https://styled-components.com/
import styled from "styled-components";
import {Icono} from "../../index"


export function BtnSave({funcion,titulo,bgcolor,icono}){
    return(
        <>
        <Container type="submit" $bgcolor={bgcolor}>
            <Icono>{icono}</Icono>
           <span className="btn" onClick={funcion}>
            {titulo}
           </span>
        </Container>
        
        </>
    )
}
const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
border: none;
gap: 10px;
background-color: initial;
.btn{
    background:${(props)=>props.$bgcolor} ;
    padding: 1rem 1.5rem;
    font-weight: 900;
    font-size: 16px;
    border: 2px solid black;
    border-radius: 20px;
    box-shadow: 1.5px 1.5px #000;
    transition: 0.3s;
    white-space: nowrap;
    color: #1E1E1E;
    cursor: pointer;

    &:hover{
      transform: translate(-0.2rem, -0.2rem);
      box-shadow: 1.8px 1.8px #000; 
    }
    &:active{
      transform: translate(0.2rem, 0.2rem);
      box-shadow: 2px 2px #000; 
    }
  }


`;