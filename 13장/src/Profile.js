import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
    james : {
        name : 'james',
        description : 'dkanakfdlsk'
    },
    john : {
        name : 'john',
        description: 'wjrrhdlTsmswnd'
    }
}

const Profile = ({match})=>{
    const profile = data[match.params.username];
    return(
        <div>
            {(profile)?
                <div>Name : {profile.name}, Description : {profile.description}</div> :
                <div>cant find user</div>}
            <WithRouterSample/>
        </div>
    );
}

export default Profile;