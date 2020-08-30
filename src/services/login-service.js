
import axios from 'axios';

const URL_LOGIN = 'https://localhost:44362/api/Logins';

export default async function login(data) {
    let result = await axios.post(`${URL_LOGIN}/`, data);
    return result;
}