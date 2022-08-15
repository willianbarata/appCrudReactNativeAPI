import api from "../api";

export async function buscaRepositorioPorUsuario(id){
    try {
        const repositorioDoUsuario = await api.get(`/repos?postId=${id}`);
        return repositorioDoUsuario.data
    } catch (error) {
        console.log('Nenhum repositório retornou')
        return []
    }
}

export async function salvarRepositorio(postId, nome, data, id){
    try {
        await api.put(`/repos/${id}`, {
        name: nome, 
        data: data, 
        postId: postId, 
        id: id});
        return 'sucesso'
    } catch (error) {
        return 'error'
    }
}


export async function criarRepositorio(postId, nome, data){
    try {
        await api.post(`/repos`, {
        name: nome, 
        data: data, 
        postId: postId
        });
        return 'sucesso'
    } catch (error) {
        return 'error'
    }
}

export async function deletarRepositorio(id){
    try {
        await api.delete(`/repos/${id}`);
        return 'sucesso'
    } catch (error) {
        return 'error'
    }
}