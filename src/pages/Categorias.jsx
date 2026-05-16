//https://styled-components.com/
import styled from "styled-components";
import { CategoriasTemplate } from "../components/templates/CategoriasTemplate";

export function Categorias() {
  return (
    <>
      <Container>
        <CategoriasTemplate />
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 100vh;
`;
