import React, {useEffect} from 'react';
import Sample from "../components/Sample";
import {useDispatch, useSelector} from "react-redux";
import {getPost, getUser} from "../modules/sample";

const SampleContainer = () => {
    const  {post, users} = useSelector(state=>state.sample);
    const loading = useSelector(state=> state.loading);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPost(100));
        dispatch(getUser());
    },  [dispatch]);

    return (
        <div>
            <Sample loadingPost={loading['sample/GET_POST']} loadingUsers={loading['sample/GET_USER']} post={post} users={users}/>
        </div>
    );
};

export default SampleContainer;
