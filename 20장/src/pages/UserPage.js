import React from 'react';
import UserContainer from "../containers/UsersContainer";

const UserPage = ({match}) => {

    return (
        <div>
            <UserContainer id={match.params}/>
        </div>
    )
};

export default UserPage;
