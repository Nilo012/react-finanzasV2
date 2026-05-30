//https://styled-components.com/
import styled from "styled-components";
import { CategoriasTemplate } from "../components/templates/CategoriasTemplate";
import { useCategoriasStore } from "../store/CategoriasStore";
import { useQuery } from "@tanstack/react-query";
import { useUsuariosStore } from "../store/UsuariosStore";

export function Categorias() {
  const { datacategoria, mostrarCategorias } = useCategoriasStore();
  const { datausuarios } = useUsuariosStore();
  // CORRECCIÓN: Sintaxis de objeto para useQuery actualizacion de estados
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar categorias", datausuarios?.id],
    queryFn: () => mostrarCategorias({ idusuario: datausuarios.id, tipo: "i" }),
    enabled: !!datausuarios?.id, // Solo se ejecuta si el usuario ya cargó
  });
  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      <Container>
       
        <CategoriasTemplate  data={datacategoria}/>
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 100vh;
`;
