
import axios from 'axios';

const URL_PROD = 'https://localhost:44362/api/Catalogos';

export async function inserirProduto(data) {
    console.log('tste', data);
    let result = await axios.post(`${URL_PROD}/`, data);
    return result;
}

export async function listarPorduto() {
    let result = await axios.get(`${URL_PROD}/`);
    return result;
}