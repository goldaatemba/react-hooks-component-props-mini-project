import React from "react";
import blogData from "./data/blog.js";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import ArticleList from "./Components/ArticleList.jsx";
import Article from "./Components/Article.jsx"
console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
       <Header title="Underreacted" />
      <About 
        image="data:image/png;base64,..."
        about="A blog about learning React"
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;