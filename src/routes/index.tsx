import React from "react";
import { Switch, Route } from "react-router-dom";

import EvinoExperience from "../pages/EvinoExperience";
import WineDetails from "../pages/WineDetails";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={EvinoExperience} />
    <Route path="/wineDetails" component={WineDetails} />
  </Switch>
);

export default Routes;
