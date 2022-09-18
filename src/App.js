import "./App.css";
import trophies from "./ps1_apeescape";
import TrophyCard from "./components/TrophyCard";

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
      {trophies.map(TrophyCase)}
    </div>
  );
}

export default App;