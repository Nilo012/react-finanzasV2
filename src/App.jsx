import { MyRoutes, Sidebar, Device, useUsuariosStore } from "./index";
import { createContext, useState } from "react";
import { Light, Dark, AuthContextProvider, Menuambur } from "./index";
import styled, { ThemeProvider } from "styled-components";
//
import { useLocation } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

export const ThemeContext = createContext(null);
function App() {
  //
  const { pathname } = useLocation();

  const [theme, setTheme] = useState("dark");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //
  const { mostrarUsuarios } = useUsuariosStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: () => mostrarUsuarios(),
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {pathname != "/login" ? (
              <Container className={sidebarOpen ? "active" : ""}>
                {/*la pagina esta dividida en 2 partes  para un mejor orden 
              sidbar y Containerbody*/}
                <div className="ContentSidebar">
                  <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
                </div>
                <div className="ContentMenuambur">
                  <Menuambur />
                </div>

                <Containerbody>
                  <MyRoutes />
                </Containerbody>
              </Container>
            ) : (
              <MyRoutes />
            )}
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgtotal};
  transition: 0.3s ease-in-out;
  &.active {
  }

  .ContentSidebar {
    display: none;
  }
  .ContentMenuambur {
    display: block;
    position: absolute;
    left: 28px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }

    .ContentSidebar {
      display: initial;
    }
    .ContentMenuambur {
      display: none;
    }
  }
`;

const Containerbody = styled.div`
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
