// src/App.jsx
import React from 'react';
import Header from './Components/Header.jsx';
import About from './Components/About';
import ArticleList from './Components/ArticleList';
import blogData from './data/blog.jsx';

function App() {
  return (
    <div className="App">
      <Header name="Golda's Blog" />
      <About 
        image="https://via.placeholder.com/215"
        about="Welcome to my personal blog where I share tech stuff and more!" 
      />
      <ArticleList posts={blogData} />
    </div>
  );
}

export default App;
