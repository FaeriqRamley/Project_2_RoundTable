import React from "react";
import SearchOption from "./components/SearchOption";
import LocationOption from "./components/LocationOption";
import PublisherOption from "./components/PublisherOption";

function App() {
  const geoApiKey = "cb69a240275841eaa61cc32b842c7924";
  const newsApiKey = "dba1b96e6cc24cb98d29ed09f8bd10ae";

  return (
    <div>
      <h1>Search Bar</h1>
      <SearchOption newsApiKey={newsApiKey}/>
      <h1>Location Display</h1>
      <LocationOption geoApiKey={geoApiKey}/>
      <h1>Article Select</h1>
      <PublisherOption />
    </div>
  );
}

export default App;
