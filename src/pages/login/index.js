import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProd } from '../../store/list';
import { useHistory } from "react-router-dom";

export default function LoginComponent() {
  const [form, setForm] = useState({ login: '', password: '' });
  const dispatch = useDispatch();
  const history = useHistory();

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(addProd(form));
    setForm({ login: '', password: '' });
    history.push('/lobby');
  }
  return (
    <div style={{ backgroundColor: '#ccc', padding: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'space-around', padding: 20 }}>
        <div style={{ backgroundColor: '#fff', width: 400, height: 200, borderRadius: 10 }}>
          <h3>Bem Vindo ao</h3>
          <h1>Catalogando</h1>
        </div>
        <div style={{ backgroundColor: '#fff', width: 400, height: 200, borderRadius: 10, alignItems: 'center' }}>
          <form style={{ padding: 10 }} onSubmit={submitForm}>
            <div style={{ marginBottom: 5, border: 0, borderBottomWidth: 1, borderBottomColor: '#cdc', display: 'flex', flexDirection: 'column' }}>
              <input type='text' name='login' value={form.login} onChange={formChange} key='name' placeholder='Usuário ' style={{}} />
              <input type='password' name='password' value={form.password} onChange={formChange} key='password' placeholder='Senha' />
              <input type='submit' value='Salvar' />
            </div>
          </form>
        </div>
      </div>
    </div >
  );

}
