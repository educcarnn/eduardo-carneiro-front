import { Switch, BrowserRouter, Route } from "react-router-dom";
import Cards from "../pages/Cards";

export const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  