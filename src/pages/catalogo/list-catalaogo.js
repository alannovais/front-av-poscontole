import React from "react";
import { useSelector } from "react-redux";

export default function LobbyComponent() {
    const prods = useSelector((state) => (state.list));
    return (
        <div style={{ backgroundColor: '#ccc', padding: 20 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1,
                 flexDirection: 'row', justifyContent: 'space-between', 
                 padding: 20 }}>
                {prods.map(prod => (
                    <div style={{ backgroundColor: '#fff', width: 400, height: 200, borderRadius: 10 }}>
                        <span style={{ position: 'relative', left: 10, fontWeight: 'bold' }}>
                            <p style={{display: 'flex', flex: 1, color: '#851d86'}}>{prod.nome}</p>
                            <p style={{display: 'flex', flex: 1}}>{prod.valor}</p>
                            <p style={{display: 'flex', flex: 1}}>{prod.quantEstoque}</p>
                            <p style={{display: 'flex', flex: 1}}>{prod.codBar}</p>
                            <p style={{display: 'flex', flex: 1}}>{prod.descricao}</p>
                       </span>
                    </div>
                ))}
            </div>
        </div >
    );
}
