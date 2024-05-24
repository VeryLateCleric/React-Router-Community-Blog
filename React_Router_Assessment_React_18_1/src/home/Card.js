import React from "react";
import { Link } from "react-router-dom";

/*
  TODO: Change the link below to go to the user route, using the user's ID.
  /users/:userId
  STATUS: DONE, 14 and 16 now link to={`/users/${user.id}`}
*/

export const Card = ({ user = { posts: [] } }) => (
  <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
    <div className="border p-4 h-100 d-flex flex-column">
      <h2 className="font-weight-lighter flex-fill">
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h2>
      <Link to={`/users/${user.id}`} className="mt-2">{user.posts.length} Posts »</Link>
    </div>
  </article>
);

export default Card;
