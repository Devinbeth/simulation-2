import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Wizard1 from './components/Wizard1.js';
import Wizard2 from './components/Wizard2.js';
import Wizard3 from './components/Wizard3.js';
import Wizard4 from './components/Wizard4.js';
import Wizard5 from './components/Wizard5.js';

export default (
    <HashRouter>
        <div>
            <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/wizard1' component={Wizard1} />
            <Route path='/wizard2' component={Wizard2} />
            <Route path='/wizard3' component={Wizard3} />
            <Route path='/wizard4' component={Wizard4} />
            <Route path='/wizard5' component={Wizard5} />
        </div>
    </HashRouter>
)