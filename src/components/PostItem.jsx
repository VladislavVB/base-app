import React from "react";
import { Button } from "./UI/button/button";

export const PostItem = (props) => {



  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.title}</strong>
          <p>{props.post.body}</p>
        </div>
        <div className="post__btns">
          <Button  onClick={() => props.remove(props.post)}>Удалить</Button>
        </div>
      </div>
    </div>
  );
};
