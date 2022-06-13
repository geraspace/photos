import logo from "./logo.svg";
import "./App.css";

// COMPONENTS
import MainNavbar from "./components/MainNavbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Photo from "./components/Photo.js";

// CARDS DATA
import CardsFile from "./components/CardsFile";

// PHOTOS DATA
import Photosfile from "./components/PhotosFile";

function App() {
  // MAPPING DATA FROM CardsFile TO FUNCTION Card
  const card = CardsFile.map((card) => {
    return (
      // FUNCTION CARD
      <Card
        key={card.id}
        // SPILL CREATES THE PROPS LIKE SO:
        // img={card.img}...
        {...card}
      />
    );
  });

  const photo = Photosfile.map((photo) => {
    return (
      // FUNCTION CARD
      <Photo 
      key={photo.id} 
      src={photo.src} 
      location={photo.location}
      />
    );
  });

  // RETURN ALL THE APP TO RENDER ON index.js
  return (
    <div className="App">
      <MainNavbar />
      <div className="photoFrame">{photo}</div>
      <Hero />
      <div className="cards-list">{card}</div>
    </div>
  );
}

export default App;
