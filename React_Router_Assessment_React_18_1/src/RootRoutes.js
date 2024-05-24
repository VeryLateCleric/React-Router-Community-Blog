import React from 'react'
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import CardList from "./home/CardList";
import NoPostSelectedMessage from './user/NoPostSelectedMessage';
import PostList from "./user/PostList";
import User from "./user/User";
import UserProfile from "./user/UserProfile";

function RootRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<CardList />}/>
      <Route path="/users/:userId" element={<User />}/>
      <Route path="/users/:userId/posts" element={<PostList />}/>
      <Route path="/users/:userId" element={<UserProfile />}/>
      <Route path="*" element={<NoPostSelectedMessage />}/>
    </Routes>
  )
}

export default RootRoutes

/*
TODO: There is no need to add a <Router >, it is in index.js.

The <CardList /> component should be shown when the user is on the index path.

The <User /> component should be shown when the user is on the following path:
/users/:userId

Display <NotFound /> when appropriate

The <PostList /> component should show on the following route:
/users/:userId/posts

The <UserProfile /> component should show on the following route:
/users/:userId
*/