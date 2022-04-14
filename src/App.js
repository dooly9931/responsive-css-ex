import logo from "./logo.svg";
import "./App.css";

import MediaQuery from "react-responsive";
import DesktopFavorites from "./Containers/Favorites/DesktopFavorites";
import MobileFavorites from "./Containers/Favorites/MobileFavorites";
import Favorites from "./Containers/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <MediaQuery minWidth={786}>
        <DesktopFavorites />
      </MediaQuery>
      <MediaQuery maxWidth={786}>
        <MobileFavorites />
      </MediaQuery>
      <Favorites />
    </div>
  );
}

export default App;
