import EventsCardsContainer from "./components/compounds/EventsCardsContainer";
import Intro from "./components/Intro";
import HeroSection from "./components/HeroSection";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


import "./App.css";
import Sponsor from "./components/Sponsors";

export default function App() {


  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());


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
      <EventsCardsContainer />
    </div>
  );
}
