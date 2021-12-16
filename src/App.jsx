import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AdminLayout from "./pages/admin/AdminLayout";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/admin" render={(props) => <AdminLayout />}></Route>
    </Switch>
  );
}

export default App;
