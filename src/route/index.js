import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LobbyComponent from '../pages/catalogo/list-catalaogo';
import LoginComponent from '../pages/login/index';
import CreateItemCatalogoComponent from '../pages/catalogo/create';

export default () => (
    <Switch>
        <Route path='/login' component={LoginComponent} />
        <Route path='/lobby' component={LobbyComponent} />
        <Route path='/createitem' component={CreateItemCatalogoComponent} />
        <Redirect path='/' to='/login' />
    </Switch>
)