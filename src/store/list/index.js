import { listarPorduto, inserirProduto } from '../../services/list-prod-service';
const INIT = [
    {
        codBar: "1234567890",
        quantEstoque: "40",
        descricao: "Teclado Mecânico - Razer",
        valor: "800,00",
        nome: "Teclado",
    },
    {
        codBar: "1234567890",
        quantEstoque: "40",
        descricao: "Teclado Mecânico - Razer",
        valor: "800,00",
        nome: "Teclado",
    },
];

export default function list(state = INIT, action) {
    let _state = listarPorduto();
    switch (action.type) {
        case 'ADD_PROD':
            let result = inserirProduto(action.prod);
            return [...state, result];
        default:
            return [...state, _state];
    }

}

export const addProd = prod => {
    return {
        type: 'ADD_PROD',
        prod,
    }
}