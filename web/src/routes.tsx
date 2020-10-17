import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import landing from "./page/landing";
import OrphanagesMap from "./page/OrphanagesMap";
import CreateOrphanages from "./page/CreateOrphanage";
import Orphanage from "./page/Orphanage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/orphanages/create" component={CreateOrphanages} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
