import React from "react";

import { deletePost } from "../api";

import NoPostSelectedMessage from "./NoPostSelectedMessage";

export const Post = ({ posts }) => {
  const postId = 1; // TODO: This ID will need to be pulled from parameters.
  const post = posts.find((post) => post.id === Number(postId));

  const handleDelete = async (id) => {
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      await deletePost(id);
      // TODO: After the post is deleted, send the user to the home page.
      // STATUS:
    }
  };

  if (post) {
    return (
      <article className="col-12 p-4 border">
        <h3 className="display-4 mb-4">{post.title}</h3>
        <p>{post.body}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Post
        </button>
      </article>
    );
  }
  return <NoPostSelectedMessage />;
};

export default Post;
