import About from "./About";
import ExperienceInfotsav from "./ExperienceInfotsav";

type IntroProps = {};

const Intro = ({}: IntroProps) => {
  return (
    <section className="w-full dark:bg-black px-2 sm:px-16 py-24 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex flex-col min-h-screen justify-between items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <About />
      <ExperienceInfotsav />
    </section>
  );
};

export default Intro;
