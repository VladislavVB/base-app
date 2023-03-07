import React from "react";

export const PostItem = (props) => {
  return (
    <div>
      {props.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};
