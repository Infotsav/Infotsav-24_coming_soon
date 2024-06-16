import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


import EventsCardsContainer from "./components/compounds/EventsCardsContainer";
import Intro from "./components/Intro";
import HeroSection from "./components/HeroSection";

import "./App.css";
import Sponsor from "./components/Sponsors";

export default function App() {
  return (
    <div className="App">

      <div className="header">
        <HeroSection />
      </div>

      <main className="flex flex-col">
        <Intro />
      </main>

      <div className="sponsor-section">
        <Sponsor />
      </div>
      <EventsCardsContainer />
    </div>
  );
}
