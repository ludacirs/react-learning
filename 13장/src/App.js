import React from "react";
import Home from "./Home";
import About from './About';
import Route from "react-router-dom/Route";
import {Link} from "react-router-dom";
import Profiles from "./Profiles";
import {HistorySampleClass, HistorySampleFunction} from "./HistorySample";
import Switch from "react-router-dom/es/Switch";

const App = () => (
    <div>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/profiles'}>Profiles</Link>
            </li>
            <li>
                <Link to={'/history'}>History Class</Link>
            </li>
            <li>
                <Link to={'/history2'}>History Function</Link>
            </li>
            <li>
                <Link to={'/About'}>About</Link>
            </li>

        </ul>
        <Switch>
            <Route path={'/'} component={Home} exact={true}/>
            <Route path={'/profiles'} component={Profiles}/>
            <Route path={['/about','/info']} component={About} />
            <Route path={'/history'} component={HistorySampleClass}/>
            <Route path={'/history2'} component={HistorySampleFunction}/>
            <Route render={({location})=>(
                <div>
                    <h2>404</h2>
                    <p>{location.pathname}</p>
                </div>)}/>
        </Switch>
    </div>
);

export default App;
