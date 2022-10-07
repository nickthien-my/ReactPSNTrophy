import "./App.css";
import trophies from "./ps1_apeescape";
import TrophyCard from "./components/TrophyCard";
import Navbar from "./components/Navbar";

function TrophyCase(trophy) {
  return <TrophyCard
    key={trophy.id}
    imgURL={trophy.imgURL}
    name={trophy.name}
    description={trophy.description}
  />
}

function App() {
  return (
    <div>
      <Navbar />
      {trophies.map(TrophyCase)}
    </div>
  );
}

export default App;