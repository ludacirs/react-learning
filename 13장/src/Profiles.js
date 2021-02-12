import React from "react";
import {Link, NavLink} from "react-router-dom";
import Route from "react-router-dom/Route";
import Profile from "./Profile";

const Profiles = ()=>{
    const activeStyle = {
        background: 'black',
        color: 'white'
    }
    return(
        <div>
        <h3>user list</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to={'/profiles/james'}>james</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to={'/profiles/john'}>john</NavLink>
                </li>
            </ul>
            <Route path={"/profiles"} exact render={()=><div>select user</div>}/>
            <Route path={'/profiles/:username'} component={Profile}/>
        </div>
    );
}

export default Profiles;