import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id. Hint: you can use the `useRouteMatch()` hook from "react-router-dom" to get the current URL path
  STATUS: started
*/

export const PostLink = ({ post }) => {
// get match of post to current Route with:
  const { url } = useRouteMatch();

  return (
    <li className="list-group-item text-truncate">
      <Link to={url}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
