import React, {useEffect} from 'react';
import User from "../components/User";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "../lib/PreloadContext";
import {getUser} from "../modules/user";

const UserContainer = ({id}) => {
    const {user} = useSelector(state=>state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(user&&user.id===parseInt(id,10)) return ;
        console.log('request');
        dispatch(getUser(id));
    },[dispatch, id, user]);


    if(!user) {
        return <Preloader resolve={()=>dispatch(getUser(id))}/>
    }

    return (
        <div>
            <User user={user}/>
        </div>
    );
};

export default UserContainer;
