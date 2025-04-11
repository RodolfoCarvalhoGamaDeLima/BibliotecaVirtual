import axios from "axios";

const livrosAPI = axios.create({baseURL:"http://localhost:8000/livros"})

async function GetLivros () {
    const response = await livrosAPI.get('/')
    return response.data
}
export {
    GetLivros
}