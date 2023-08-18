import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./components/homePage";
import Task from "./components/task";
import { Toaster } from "react-hot-toast";
import About from "./components/about";
import Chart from "./components/chart";
import NotFound from "./components/notFound";

const App = () => {
  return (
    <Layout>
      <div>
        <Toaster />
      </div>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/task" component={Task} />
        <Route path="/about" component={About} />
        <Route path="/chart" component={Chart} />
        <Route  component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
