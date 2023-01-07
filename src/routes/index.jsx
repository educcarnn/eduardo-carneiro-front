import { Switch, BrowserRouter, Route } from "react-router-dom";

import Itens from "../pages/Itens";

export const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Itens />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  