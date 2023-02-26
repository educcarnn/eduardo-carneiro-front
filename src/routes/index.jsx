import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CharacterDetails from "../pages/CharacterDetails";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;