import axios from "axios";

const favoritosAPI = axios.create({baseURL:"http://localhost:8000/favoritos"})

async function GetFavoritos () {
    const response = await favoritosAPI.get('/')
    return response.data
}

async function PostFavoritos (id) {
    await favoritosAPI.post (`/${id}`)
}

async function DeleteFavoritos (id) {
    await favoritosAPI.post (`/${id}`)
}
export {
    GetFavoritos,
    PostFavoritos,
    DeleteFavoritos,
}