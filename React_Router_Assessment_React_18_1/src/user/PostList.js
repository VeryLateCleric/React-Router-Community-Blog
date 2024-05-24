import React from "react";
import { useParams } from "react-router-dom"; //added import

import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";


export const PostList = ({ posts }) => {
  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ));
  const { userId, postId } = useParams();
  
  const renderContent = postId ? (
    <Post posts={posts} postId={postId} />
  ) : (
    <NoPostSelectedMessage />
  );

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">
          {posts.map((post) => (
            <PostLink key={post.id} post={post} />
          ))}
        </ul>
      </div>
      <div className="col-9">{renderContent}</div>
    </div>
  );
};

export default PostList;

{/* <NoPostSelectedMessage />
<Post posts={posts} /> */}
/*
  TODO: Update the below {9-25} so that the components show on the appropriate route.
  STATUS: started
  Hint: you can use the `useParams()` hook from "react-router-dom" to get the userId

  The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/