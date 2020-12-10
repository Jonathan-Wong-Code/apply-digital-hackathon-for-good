import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateStory from "./containers/CreateStory";
import CreatePanel from "./containers/CreatePanel";
import Panel from "./containers/Panel";
import Dashboard from "./containers/Dashboard";
import { StoryProvider } from "./contexts/story";
import Header from "./components/Header";
import ReadStory from "./containers/ReadStory";

function App() {
  return (
    <StoryProvider>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/createStory" component={CreateStory} />
            <Route path="/createPanel" component={CreatePanel} />
            <Route path="/story/:id" component={Panel} />
            <Route path="/readStory" component={ReadStory} />
          </Switch>
        </Router>
      </div>
    </StoryProvider>
  );
}

export default App;
