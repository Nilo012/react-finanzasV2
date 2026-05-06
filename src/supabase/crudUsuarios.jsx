import { supabase, ObtenerIdAuthSupabase } from "../index";

import Swal from "sweetalert2";

export const InsertarUsuarios = async (p) => {
  try {
    const { data } = await supabase.from("usuarios").upsert(p).select();
    return data;
  } catch (error) {}
};

//proceso o metodo para mostrar los usuarios de data base
export const MostrarUsuarios = async () => {
  try {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const { error, data } = await supabase
      .from("usuarios")
      .select()
      .eq("idauth_supabase", idAuthSupabase);
    // if (error) {
    //   alert("MostrarUsuarios", error);
    // }
    if (data) {
      return data?.[0] ?? null; //
    }
  } catch (error) {
   // alert(error.error_description || error.message + "MostrarUsuarios");
  }
};

// modal para gusrdar cambio de tipo de modena y tema
export async function EditarTemaMonedaUser(p) {
  try {
    const { error } = await supabase.from("usuarios").update(p).eq("id", p.id);
    if (error) {
      alert("Error al editar usuario", error);
    }
    Swal.fire({
      //position: "top-end",
      icon: "success",
      title: "Datos modificados",
      showConfirmButton: false,
      timer: 1500,
    });
    
  } catch (error) {
    alert(error.error_description || error.message + "EditarTemaMonedaUser");
  }
}
