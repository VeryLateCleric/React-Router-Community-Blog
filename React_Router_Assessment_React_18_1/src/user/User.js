import React, { useEffect, useState, useParams } from "react";
import UserProfile from "./UserProfile";
import { fetchUserWithPosts } from "../api";
import PostList from "./PostList";
import PostsNav from "./PostsNav";
import ErrorMessage from "../common/ErrorMessage";

export const User = () => {
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);
  const { userId } = useParams(); // TODO: This ID will need to be pulled from parameters. STATUS: DONE

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);

  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </ErrorMessage>
    );
  }
  return (
    <section className="container">
      <PostsNav />
      {user && 
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Posts</a>
          </li>
        </ul>

        {user.id ? (
          <div className="p-4 border border-top-0">
            <Routes>
              <Route path="/" element={<UserProfile  user={user} />} />
              <Route path="/posts" element={<PostList posts={user.posts} />} />
            </Routes>
          </div>
        ) : (
          <div className="p-4 border border-top-0">
            <p>Loading...</p>
          </div>
        )}
      </div>
    }
    </section>
  );
};

export default User;
