import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import EventsCardsContainer from "./components/compounds/EventsCardsContainer";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <EventsCardsContainer />
    </div>
  );
}
