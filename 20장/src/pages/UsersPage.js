import React from 'react';
import UsersContainer from '../containers/UsersContainer';
import {Route} from "react-router-dom";
import UserContainer from "../containers/UserContainer";

const UsersPage = () => {
  return (
      <div>
        <UsersContainer/>
        <Route path={'/users/:id'} render={({match})=><UserContainer id={match.params.id}/>}/>
      </div>
  );
};

export default UsersPage;
