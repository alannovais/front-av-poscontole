import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProd } from '../../store/list';

export default function CreateItemCatalogoComponent() {
  const [form, setForm] = useState({ nameProd: '', money: '', codBar: '', countRegister: '', describe: '' });
  const dispatch = useDispatch();

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(addProd(form));
    setForm({ nameProd: '', money: '', codBar: '', countRegister: '', describe: '' });
  }

  return (
    <div style={{ backgroundColor: '#ccc', padding: 20 }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 20 }}>
        <div style={{ backgroundColor: '#fff', width: 400, height: 200, borderRadius: 10, alignItems: 'center' }}>
          <form style={{ padding: 10 }} onSubmit={submitForm}>
            <div style={{ flexDirection: 'row', marginBottom: 5, border: 0, borderBottomWidth: 1, borderBottomColor: '#cdc' }}>
              <input type='text' name='nameProd' value={form.nameProd} onChange={formChange} key='name' placeholder='Nome do Produto' style={{}} />
              <input type='text' name='money' value={form.money} onChange={formChange} key='money' placeholder='Preço' />
            </div>
            <div style={{ flexDirection: 'row' }}>
              <input type='text' name='codBar' value={form.codBar} onChange={formChange} key='codBar' placeholder='Código de Barras:' />
            </div>
            <div style={{ flexDirection: 'row' }}>
              <input type='text' name='countRegister' value={form.countRegister} onChange={formChange} key='countRegister' placeholder='Quantidade em estoque:' />
            </div>
            <div style={{ flexDirection: 'row' }}>
              <textarea rows='5' cols='50' name='describe' value={form.describe} onChange={formChange} key='describe' placeholder='Descrição:' />
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-end' }}>
              <input type='submit' value='Salvar' />
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}
