import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Home from './routes/home/Home';
import User from './routes/user/User';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="./Home" component={Home}/>
            <Route path="./user/:userLogin" component={User}/>
        </Switch>
    </BrowserRouter>,


    document.getElementById('root'));
registerServiceWorker();
