import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const About = lazy(() => import("../pages/about"));
const Home = lazy(() => import("../pages/home"));

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route component={() => <Redirect to="/home" />} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
