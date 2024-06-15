type AboutProps = {};

const About = ({}: AboutProps) => {
  return (
    <div className="w-full relative flex flex-col sm:grid sm:grid-cols-[1fr,2fr] gap-4">
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h2 className="text-xl sm:text-5xl font-bold text-[#c6c4c9] mr-auto w-full sm:w-auto">
          About{" "}
          <p className="uppercase text-2xl sm:text-6xl font-extrabold text-[rgb(194,255,63)]">
            Infotsav
          </p>
        </h2>
      </div>
      <div className="text-[#c6c4c9] sm:px-4 sm:text-lg h-full flex items-center text-center sm:text-left">
        <p>
          Infotsav is the techno-managerial fest of Atal Bihari Vajpayee Indian
          Institute of Information Technology and Management, aimed at nurturing
          creativity and innovation among the youth in a competitive as well as
          a recreational manner. Participants hail from premier technical and
          managerial institutions of the region, and from a wide range of
          backgrounds. Sponsored by businesses behind cutting-edge technologies,
          it has got everything to boast its status as a national-level
          technical festival. Events range from online contests like Trove Trace
          to nerve-wrecking hackathons, mind boggling quizzes, intensive coding
          contests and everything in between. Besides the prize money, exposure
          at the national level serves as a great incentive for the
          participants.
        </p>
      </div>
    </div>
  );
};

export default About;
