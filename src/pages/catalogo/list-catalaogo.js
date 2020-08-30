import React from "react";
import { useSelector } from "react-redux";

export default function LobbyComponent() {
    const prods = useSelector((state) => (state.list));
    return (
        <div style={{ backgroundColor: '#ccc', padding: 20 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                {prods.map(prod => (
                    <div style={{ backgroundColor: '#fff', width: 400, height: 200, borderRadius: 10 }}>
                        <p style={{}}>
                            Nome Prod.
                            R$ 12,90
                            disponível: 5
                            código: 21321316466
                            Este sadasdasdasdasd
                       </p>
                    </div>
                ))}
            </div>
        </div >
    );
}