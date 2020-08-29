import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=887cc9223add4e74936b88426b98fbde";

        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top articles {articles.length}</h1>
            {
                articles.map(article => <News article ={article}></News>)
            }        
        </div>
    );
};

export default TopHeadline ;                