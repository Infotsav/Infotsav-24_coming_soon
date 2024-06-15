type ExperienceInfotsav = {};

const ExperienceInfotsav = ({}: ExperienceInfotsav) => {
  return (
    <div className="w-full relative flex flex-col sm:grid sm:grid-cols-[1fr,2fr] gap-4">
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h2 className="text-xl sm:text-5xl font-bold text-[#c6c4c9] mr-auto w-full sm:w-auto">
          Experience{" "}
          <p className="uppercase text-2xl sm:text-6xl font-extrabold text-[rgb(194,255,63)]">
            Infotsav
          </p>
        </h2>
      </div>
      <div className="text-[#c6c4c9] sm:px-4 sm:text-lg h-full flex items-center text-center sm:text-left">
        <p>
          Infotsav provides a platform for one and all to witness one of the
          biggest techno-managerial fests of Central India with pure delight and
          enthusiasm. With highly intense competition encompassing over the
          adventurously designed events, a huge price pool and a platform to
          show your worth, Infotsav has always served to be the ideal
          destination for every programmer, manager, developer, or simply a
          thinker to experience the bliss of technology and creativity.
        </p>
      </div>
    </div>
  );
};

export default ExperienceInfotsav;
