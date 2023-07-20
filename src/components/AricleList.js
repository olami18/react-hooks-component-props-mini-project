import React from "react";
import Article from "./Article";

function ArticleList ({posts}) {
    return (
        <main>
            {posts.map((post) => (
                <Article 
                key={post.id}
                title={title.id}
                date={date.id} 
                preview={preview.id}
                />

            ))}
        </main>
    );
}

export default ArticleList
