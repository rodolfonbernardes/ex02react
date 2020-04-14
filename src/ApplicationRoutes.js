import React from "react";
import { Route } from "react-router-dom";
import { Home, UsersTable, UsersItem } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users/" exact component={UsersTable} />
    <Route path="/users/:nome" exact component={UsersItem} />
  </>
);
