import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App'
import Home from './components/home'

function Router() {
    return (
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/roster' component={Home} />
            <Route path='/schedule' component={() => <p>HOME2</p>} />
        </Switch>
    );
}

export default Router;