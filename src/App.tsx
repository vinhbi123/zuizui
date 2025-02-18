import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./router/router";
import "./index.css";
import Header from "./component/header/header";
const AppRoutes: React.FC = () => {
  return useRoutes(routes);
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;