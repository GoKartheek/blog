import React from 'react';
import './style.css';
import BlogPost from './../BlogPost';

const Articles = ({articles, inputText}) => {
    let filteredArticles = inputText ? articles.filter(article => article.title.includes(inputText)) : articles;
    return(
        <div>
            {
                filteredArticles.map((article, index) => {
                    return(
                        <BlogPost article={article} key={`blog-${index}`}/>
                    )
                })
            }
        </div>
    );
}

export default Articles;