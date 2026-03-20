import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login, Home, UserAuth,Configuracion } from "../index";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
export function MyRoutes() {
  const { user } = UserAuth();
  console.log("user:", user);
  return (

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
          <Route path="/" element={<Home />} />
          <Route path="/configurar" element={<Configuracion />} />
        </Route>
        
      </Routes>
    
  );
}
