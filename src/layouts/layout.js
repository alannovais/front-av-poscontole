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
                <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#ccc' }}>
                    <div style={{ justifyContent: 'flex-start' }}>
                        <h2 style={{ color: '#851d86' }}>Oi, Usuário</h2>
                    </div>
                    <div style={{ justifyContent: 'flex-end' }}>
                        <div style={{ justifyContent: 'space-between' }}>
                            <button onClick={toCadastro} style={
                                { backgroundColor: location.pathname === '/createitem' ? '#851d86' : '#ccc',
                                 borderWidth: 0, borderRadius: 10,
                                 color: location.pathname === '/createitem' ? '#fff': '#000', width: 100, height: 40  }}>
                                cadastro
                             </button>
                            <button onClick={toCatalogo} style={
                                { backgroundColor: location.pathname === '/lobby' ? '#851d86' : '#ccc',
                                 borderWidth: 0, borderRadius: 10,
                                 color: location.pathname === '/lobby' ? '#fff' : '#000', width: 100, height: 40 }}>
                                catálogo
                            </button>
                            <button onClick={loggout} style={{ borderWidth: 0, borderRadius: 10, width: 100, height: 40, backgroundColor: '#ccc' }}>
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