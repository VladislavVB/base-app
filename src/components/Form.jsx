import React, { useState } from "react";
import { Button } from "./UI/button/button";
import { Input } from "./UI/input/input";

export const Form = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <form className="form">
        <Input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <Input
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <Button disabled={(post.title && post.body) === ""} onClick={addNewPost}>
          Добавить пост
        </Button>
      </form>
    </div>
  );
};
