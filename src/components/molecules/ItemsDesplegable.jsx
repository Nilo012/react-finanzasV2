//https://styled-components.com/
import styled from "styled-components";
import { Icono,Colorcontet } from "../../index"

export function ItemsDesplegable({item,funcion}) {
  return (
    <Container onClick={funcion}>
      <Icono>{item.icono}</Icono>
      <Colorcontet $ancho="12px" $alto="12px" $color={item.color}/>
      <span>{item.text}</span>
    </Container>
  );
}
const Container = styled.div`
cursor: pointer;
padding: 8px;
display: flex; //por defecto orden forizontal
align-items: center;
gap: 10px;
border-radius: 20px;
&:hover{
  background-color: ${({theme})=>theme.bg4};
}
svg{
  font-size: 25px;//tamaño dr iconos svg
  display: block;
}

`;