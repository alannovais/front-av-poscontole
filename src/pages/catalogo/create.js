import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProd } from '../../store/list';


export default function CreateItemCatalogoComponent() {
  const [form, setForm] = useState({ nome: '', valor: '', codBar: '', quantEstoque: '', descricao: '' });
  const dispatch = useDispatch();

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(addProd(form));
    setForm({ nome: '', valor: '', codBar: '', quantEstoque: '', descricao: '' });
  }

  const style =
    { borderTopWidth: 0, borderLeft: 0, borderRightWidth: 0, borderBottomWidth: 2, borderBottomColor: '#cec', marginBottom: 10, marginLeft: 20 }
    ;
    
  return (
    <div style={{ backgroundColor: '#ccc', padding: 20 }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 20 }}>
        <div style={{ backgroundColor: '#fff', width: 500, height: 300, borderRadius: 10, alignItems: 'center' }}>
          <form style={{ padding: 10 }} onSubmit={submitForm}>
            <div style={{ flexDirection: 'row', marginBottom: 5, border: 0, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <input type='text' name='nome' value={form.nome}
                onChange={formChange} key='nome' placeholder='Nome do Produto' style={style} />
              <input type='text' style={style} name='valor' value={form.valor} onChange={formChange} key='valor' placeholder='Preço' />
            </div>
            <div style={{ flexDirection: 'row' }}>
              <input type='text' name='codBar' style={style} value={form.codBar} onChange={formChange} key='codBar' placeholder='Código de Barras:' />
            </div>
            <div style={{ flexDirection: 'row' }}>
              <input type='text' name='quantEstoque' style={style} value={form.quantEstoque} onChange={formChange} key='quantEstoque' placeholder='Quantidade em estoque:' />
            </div>
            <div style={{ flexDirection: 'row' }}>
              <textarea rows='5' cols='50' name='descricao' style={style} value={form.descricao} onChange={formChange} key='descricao' placeholder='Descrição:' />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-end' }}>
              <input style={{ backgroundColor: '#ced', border: 'none', width: 150, height: 30, borderRadius: 10 }} type='submit' value='Salvar' />
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}
