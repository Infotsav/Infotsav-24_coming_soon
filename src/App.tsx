// import EventsCardsContainer from "./components/compounds/EventsCardsContainer";
import Intro from "./components/Intro";
import HeroSection from "./components/HeroSection";
import Sponsor from "./components/Sponsors";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {

  return (
    <div className="App" style={{ width: '100vw' }}>

      <div className="header">
        <HeroSection />
      </div>

      <main className="flex flex-col">
        <Intro />
      </main>

      <div className="sponsor-section">
        <Sponsor />
      </div>

      {/* <EventsCardsContainer /> */}

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}
