import login from '../../services/login-service';
export default async function acclogin(state = [], action) {
    // var teste = await axios.post('https://reqres.in/api/register', {
    //     "email": "eve.holt@reqres.in",
    //     "password": "pistol"
    // });
    //service fom funcao async retornando o objeto
    switch (action.type) {
        case 'AUTH':
            let teste = await login(action.login);
            console.log('teste', teste.data);
            return action.login;
        default:
            return state;
    }

}

export const auth = login => {
    return {
        type: 'AUTH',
        login,
    }
}