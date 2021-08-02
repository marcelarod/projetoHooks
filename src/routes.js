import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Main from './Pages/Main';
import Repositorio from './Pages/Repositorio';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path ='/' component={Main}/>
            <Route exact path ='/Repositorio/:repositorio' component={Repositorio}/>
        </Switch>
        </BrowserRouter>
    )
}