import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import AddProject from './AddProject'
const AdminLayout = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Admin />
      </Route>
      <Route path="/admin/add-project">
        <AddProject/>
      </Route>
    </Switch>
  );
};

export default AdminLayout;
