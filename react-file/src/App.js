import React from "react";
import { Switch,Route,Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ArticlePage from "./pages/ArticlePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const geoApiKey = "cb69a240275841eaa61cc32b842c7924";
  const newsApiKey = "dba1b96e6cc24cb98d29ed09f8bd10ae";

  return (
    <div>
      <h1>Temporary Nav</h1>
      <div>
        <Link to="/">Search</Link>
        <Link to="/articles">To Articles</Link>
        <Link to="/profile">To Profile</Link>
      </div>
      <Switch>
        <Route exact path="/" component={SearchPage}/>
        <Route path="/articles" component={ArticlePage}/>
        <Route path="/profile" component={ProfilePage}/>
      </Switch>
    </div>
  );
}

export default App;
