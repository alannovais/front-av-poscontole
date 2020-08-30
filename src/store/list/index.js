import axios from 'axios';
const INIT = [
    {
        codBar: "1234567890",
        countRegister: "40",
        describe: "Teclado Mecânico - Razer",
        money: "800,00",
        nameProd: "Teclado",
    },
    {
        codBar: "1234567890",
        countRegister: "40",
        describe: "Teclado Mecânico - Razer",
        money: "800,00",
        nameProd: "Teclado",
    },
    {
        codBar: "1234567890",
        countRegister: "40",
        describe: "Teclado Mecânico - Razer",
        money: "800,00",
        nameProd: "Teclado",
    },
    {
        codBar: "1234567890",
        countRegister: "40",
        describe: "Teclado Mecânico - Razer",
        money: "800,00",
        nameProd: "Teclado",
    },
    {
        codBar: "1234567890",
        countRegister: "40",
        describe: "Teclado Mecânico - Razer",
        money: "800,00",
        nameProd: "Teclado",
    },
    {
        codBar: "1234567890",
        countRegister: "40",
        describe: "Teclado Mecânico - Razer",
        money: "800,00",
        nameProd: "Teclado",
    },
    {
        codBar: "1234567890",
        countRegister: "40",
        describe: "Teclado Mecânico - Razer",
        money: "800,00",
        nameProd: "Teclado",
    }];

export default function list(state = INIT, action) {
    // var teste = await axios.post('https://reqres.in/api/register', {
    //     "email": "eve.holt@reqres.in",
    //     "password": "pistol"
    // });
    //service fom funcao async retornando o objeto
    switch (action.type) {
        case 'ADD_PROD':
            return [...state, action.prod];
        default:
            return state;
    }

}

export const addProd = prod => {
    return {
        type: 'ADD_PROD',
        prod,
    }
}