//https://styled-components.com/
import styled from "styled-components";
import { ContentHeader, DataUser } from "../../index";

export function Header({stateConfig}) {//estados menu desplegable
  return (
    <ContentHeader>
      <DataUser stateConfig={stateConfig} />
    </ContentHeader>
  );
}
