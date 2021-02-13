import React from 'react';
import styled from 'styled-components';
import NewsItem from "./NewsItem";
import usePromise from "../lib/usePromise";
import axios from "axios";

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(()=>{
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=c5e53e4a862f42e19936a95c3b7bf9d6`);
    },[category]);

    if(loading) {
        return <NewsListBlock>Waiting for loading...</NewsListBlock>
    }
    if(!response) {
        return null;
    }
    if(error){
        return <NewsListBlock>Error!</NewsListBlock>
    }
    const {articles} = response.data;

    return (
        <NewsListBlock>
            {articles.map(v=><NewsItem key={v.url} article={v}/>)}
        </NewsListBlock>
    );
};
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width:768){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    `;
export default NewsList;