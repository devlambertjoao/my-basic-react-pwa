import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const About = lazy(() => import("../pages/about"));
const Home = lazy(() => import("../pages/home"));

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Redirect exact path="/" to="/home"/>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Suspense>
    </Switch>
  );
};

export default Routes;
