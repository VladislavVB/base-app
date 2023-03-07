import React, { useState } from 'react'
import { Counter } from './components/Counter';

import './styles/App.css'
import { PostItem } from './components/PostItem';


function App() {

  const [posts] = useState([
    {
      id: 1,
      title: '1 JS',
      body: 'js top desc 3'
    },
    {
      id: 2,
      title: '2 JS',
      body: 'js top desc 3'
    },
    {
      id: 3,
      title: '3 JS',
      body: 'js top desc 3'
    },
  ])


  return (
    <div className="App">
      <Counter />
      <h1 style={{textAlign: 'center'}}>
        Список постов
      </h1>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />
      )}
    </div>
  );
}

export default App;
