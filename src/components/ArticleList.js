import React from 'react'
import Article from './Article'

function ArticleList({ articles }) {
    const getArticles = articles.map((article) => {
        return <Article key={article.id} {...article} />
    });
    return (
        <div id='articleList'>{getArticles}</div>
    );
}

export default ArticleList;