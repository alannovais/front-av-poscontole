import React, { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


export default ({ children }) => {
    const history = useHistory();
    let location = useLocation();
    function toCadastro(e) {
        e.preventDefault();
        history.push('/createitem')
    }

    function toCatalogo(e) {
        e.preventDefault();
        history.push('/lobby')
    }

    function loggout(e) {
        e.preventDefault();
        history.push('/')
    }

    if (location.pathname === '/' || location.pathname === '/login') {
        return (
            <Fragment>
                {children}
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <div style={{ justifyContent: 'flex-start' }}>
                        <p>Oi, Usuário</p>
                    </div>
                    <div style={{ justifyContent: 'flex-end' }}>
                        <div style={{ justifyContent: 'space-between' }}>
                            <button onClick={toCadastro} style={{ backgroundColor: location.pathname === '/createitem' ? 'red' : '#ccc', borderWidth: 0, borderRadius: 10, color: '#fff' }}>
                                cadastro
                             </button>
                            <button onClick={toCatalogo} style={{ backgroundColor: location.pathname === '/lobby' ? 'red' : '#ccc', borderWidth: 0, borderRadius: 10 }}>
                                catálogo
                            </button>
                            <button onClick={loggout} style={{ borderWidth: 0, borderRadius: 10 }}>
                                sair
                            </button>
                        </div>
                    </div>
                </div>
                {children}
            </Fragment>
        );
    }
}