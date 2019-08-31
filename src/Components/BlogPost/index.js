import React from 'react';
import './style.css';

const BlogPost = ({article}) => {
    return(
        <div>
            <div className="blog">{article.title}</div>
        </div>
    );
}

export default BlogPost;