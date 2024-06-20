import { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-10-18T00:00:00").getTime();
    const currentTime = Date.now();
    const difference = eventDate - currentTime;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-[#c6c4c9] p-4 rounded-lg grid sm:grid-cols-[1fr,2fr] gap-4 w-full relative sm:pt-16">
      <div className="sm:w-full flex">
        <h2 className="text-xl sm:text-5xl font-bold text-[#c6c4c9] mr-auto w-full sm:w-auto text-center sm:mr-auto">
          <span>Save</span>
          <span className="uppercase text-[rgb(194,255,63)] block font-extrabold text-2xl sm:text-6xl">
            the date
          </span>
        </h2>
      </div>
      <div className="flex justify-between items-center w-full">
        <CountdownUnit text={timeLeft.days} unit="Days" />
        <CountdownDelimeter />
        <CountdownUnit text={timeLeft.hours} unit="Hours" />
        <CountdownDelimeter />
        <CountdownUnit text={timeLeft.minutes} unit="Minutes" />
        <CountdownDelimeter />
        <CountdownUnit text={timeLeft.seconds} unit="Seconds" />
      </div>
    </div>
  );
};

export default Countdown;

type CountdownUnitProps = {
  unit: string;
  text: number;
};

const CountdownUnit = ({ text, unit }: CountdownUnitProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl sm:text-6xl font-bold sm:font-extrabold text-[rgb(194,255,63)]">
        {text}
      </p>
      <span className="text-base sm:text-2xl">{unit}</span>
    </div>
  );
};

const CountdownDelimeter = () => {
  return (
    <span className="text-lg self-start sm:self-center mt-2 sm:mt-0 sm:text-5xl font-extrabold text-[#c6c4c9] opacity-85">
      :
    </span>
  );
};
