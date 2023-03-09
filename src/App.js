import React, { useState } from "react";
import "./styles/App.css";

import { PostList } from "./components/PostList";
import { Form } from "./components/Form";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "1 JS",
      body: "js top desc 3",
    },
    {
      id: 2,
      title: "2 JS",
      body: "js top desc 3",
    },
    {
      id: 3,
      title: "3 JS",
      body: "js top desc 3",
    },
  ]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <Form create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Постов.нет</h1>
      )}
    </div>
  );
}

export default App;
