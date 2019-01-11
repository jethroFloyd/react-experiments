import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { Button } from "@blueprintjs/core";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => (
  <Button rightIcon="arrow-right" intent="success" text="Next step" />
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
