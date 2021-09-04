import React from "react";
import SearchOption from "./components/SearchOption";
import LocationOption from "./components/LocationOption";
import PublisherOption from "./components/PublisherOption";

function App() {
  // const geoApiKey = "cb69a240275841eaa61cc32b842c7924";
  // const newsApiKey = "abb061c97806ac5fbae04e323e379b05";

  return (
    <div>
      <h1>Search Bar</h1>
      <SearchOption />
      <h1>IP Display</h1>
      <LocationOption />
      <h1>Article Select</h1>
      <PublisherOption />
    </div>
  );
}

export default App;
