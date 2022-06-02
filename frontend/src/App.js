import "./App.css";
import Navbar from "./components/Navbar";
import Animes from "./components/Animes";

const DUMMY_ANIMES = [
  {
    id: 1,
    title: "Sword Art Online",
    chaptersCount: 24,
    comment: "Empieza bien, pero después del capítulo 10, decae mucho",
  },
  {
    id: 2,
    title: "Black Clover",
    chaptersCount: 170,
    comment: "Shonen de peleas que está piola pero tarda en arrancar",
  },
  {
    id: 3,
    title: "SpyXFamily",
    chaptersCount: 12,
    comment: "Slice of life muy bueno y divertido",
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Animes animeList={DUMMY_ANIMES} />
      </div>
    </div>
  );
}

export default App;
