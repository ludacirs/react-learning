import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import loadable from "@loadable/component";
// import RedPage from "./pages/RedPage";
// import BluePage from "./pages/BluePage";
// import UsersPage from "./pages/UsersPage";

const RedPage = ()=> loadable(()=>import('./components/Red'));
const BluePage = ()=> loadable(()=>import('./components/Blue'));
const UsersPage = ()=> loadable(()=>import('./components/Users'));

const App = () => (
    <div>
        <Menu/>
        <hr/>
        <Route path="/red" component={RedPage}/>
        <Route path="/blue" component={BluePage}/>
        <Route path="/users" component={UsersPage}/>
    </div>
);

export default App;
