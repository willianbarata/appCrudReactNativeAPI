import api from "../api";

export async function buscaUsuario(nomeUsuario){

    try {
        const usuario = await api.get(`/users?login=${nomeUsuario}`);
        return usuario.data[0]
    } catch (error) {
        console.log(error)
    }
}