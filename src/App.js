import React from 'react';
import './App.css';
import Layout from './layouts/layout'
import Route from './route/index'
// let location = useLocation();
// location.pathname === '/' || location.pathname === 'login' 

export default function App() {
  return (
    <Layout>
      <Route />
    </Layout>
  );

}
