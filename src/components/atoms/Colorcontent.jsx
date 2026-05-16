import styled from "styled-components";

export const Colorcontet=styled.div`
    justify-content: center;
    min-height: ${(props)=>props.$alto};
    width: ${(props)=>props.$ancho};
    display: block; //xk sera una circunferencia
    background-color: ${(props)=>props.$color};
    border-radius: 50%;
    text-align: center;
`