import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CharacterDetails from "../pages/CharacteresDetails";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/character/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
