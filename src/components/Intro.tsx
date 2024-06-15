import About from "./About";
import ExperienceInfotsav from "./ExperienceInfotsav";

type IntroProps = {};

const Intro = ({}: IntroProps) => {
  return (
    <section className="w-full px-6 sm:px-16 py-6 sm:py-24 bg-black sm:bg-grid-white/[0.1] bg-grid-white/[0.2] relative flex flex-col sm:min-h-screen justify-between items-center selection:bg-[rgb(194,255,63)] selection:text-black gap-8">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <About />
      <ExperienceInfotsav />
    </section>
  );
};

export default Intro;
