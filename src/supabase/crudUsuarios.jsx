import { supabase, ObtenerIdAuthSupabase } from "../index";

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
    if (error) {
      alert("MostrarUsuarios", error);
    }
    if (data) {
      return data?.[0] ?? null;//
    }
  } catch (error) {
    alert(error.error_description || error.message + "MostrarUsuarios");
  }
};
