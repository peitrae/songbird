import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Theme from "./theme";
import Home from "./views/Home";
import Main from "./views/Main";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/player" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
