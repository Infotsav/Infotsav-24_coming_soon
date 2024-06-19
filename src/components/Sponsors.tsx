import { useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CK from "../assets/images/CK.png";
import CodeChef from "../assets/images/CodeChef.jpg";
import Dainik_Bhaskar from "../assets/images/Dainik_Bhaskar.png";
import Digital_Ocean from "../assets/images/DigitalOcean.png";
import FabHotels from "../assets/images/FabHotels.png";
import FestPav from "../assets/images/FestPav.jpg";
import Hack_Society from "../assets/images/Hack_Society.jpg";
import HackerEarth from "../assets/images/HackerEarth.png";
import InkMonk from "../assets/images/InkMonk.png";
import KnowAFest from "../assets/images/KnowAFest.png";
import MyFM from "../assets/images/MyFM.png";
import Paytm from "../assets/images/PayTm.jpg.png"; // Fixed the file name
import Swiggy from "../assets/images/Swiggy.png";
import CollegeFever from "../assets/images/The_College_Fever.png";
import arrow from "../assets/images/title_arrow.svg";

gsap.registerPlugin(ScrollTrigger);

const Sponsor = () => {
    useEffect(() => {
        gsap.to(".sponsorsScrollContainer", {
            x: -500,
            duration: 3,
            scrollTrigger: {
                trigger: ".sponsorsScrollContainer",
                scrub: true,
                start: "top 80%",
                end: "top -10%",
                invalidateOnRefresh: true
            }
        });
    }, []);

    const sponsors = [
        CK,
        CodeChef,
        Dainik_Bhaskar,
        Digital_Ocean,
        FabHotels,
        FestPav,
        HackerEarth,
        Hack_Society,
        InkMonk,
        KnowAFest,
        Swiggy,
        MyFM,
        Paytm,
        CollegeFever
    ];

    const result = sponsors.map((sponsor, index) => (
        <Slider.Slide
            className={`mx-4 aspect-square ${index % 3 === 1 ? "border-4" : "border-2"} ${index % 2 === 0 ? "bg-[#c2ff3f]" : "bg-transparent"} bg-[#c2ff3f] rounded-full aspect-square w-[300px] flex justify-center items-center p-3 overflow-clip`}
            key={index}
            {...(sponsor as any)}
        >
            <img src={sponsor} alt={`Sponsor ${index}`} />
        </Slider.Slide>
    ));

    return (
        <section className="sponsorsContainer overflow-x-hidden lg:w-screen xl:w-full">
            <div className="w-full pt-60 pl-24 textContainer xl:pt-72 x-10">
                <p className="flex items-center flex-row preText">
                    <img className="h-5 arrowSVG" src={arrow} alt="" />
                    <span className="lg:text-xl xl:text-[32px] heartfelt">
                        A Heartfelt Tribute to the
                    </span>
                </p>
                <h3 className="xl:text-[230px] sponsorWindow text-[#c2ff3f] md:text-[70px] lg:text-[120px] ml-10 leading-none -mb-4 sponsorsText">
                    SPONSORS
                </h3>
                <span className="block sponsorWindow text-transparent postText2 text-6xl lg:ml-96 xl:text-[85px] fromText" id="FROM">
                </span>
                <span className="block sponsorWindow fromText text-[#aaa] text-6xl ml-52 xl:text-[85px]">
                    From Past
                </span>
            </div>
            <div className="w-full overflow-x-hidden h-screen scrollContainer">
                <div className="-rotate-3 pt-7 mt-9 w-[200%] mx-auto -ml-40 sponsorsScrollContainer">
                    <Slider className="slider" duration={18} pauseOnHover={true} reverse={false} unit="px">
                        {result}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;
