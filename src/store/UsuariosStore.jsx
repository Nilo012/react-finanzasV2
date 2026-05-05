import { create } from "zustand";
import { EditarTemaMonedaUser, MostrarUsuarios } from "../index";

export const useUsuariosStore = create((set,get)=>(
    {
        datausuarios:[],
        mostrarUsuarios: async ()=>{
            const response = await MostrarUsuarios();
            set({datausuarios: response});
            return response;
        },

        //editar tema y tipo de moneda
        editartemamonedauser: async (p)=>{
            await EditarTemaMonedaUser(p)
        }
    }
))


//

