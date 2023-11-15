// ArticleList.js
import React from "react";
import Article from "./Article";

function ArticleList({ posts }) { // Change 'articles' to 'posts' here
  return (
    <div>
      {posts.map((article, index) => (
        <Article key={index} title={article.title} content={article.content} />
      ))}
    </div>
  );
}

export default ArticleList;
