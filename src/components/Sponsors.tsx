import React, { useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import CK from "../assets/images/CK.png";
import CodeChef from "../assets/images/CodeChef.jpg";
import Dainik_Bhaskar from "../assets/images/Dainik_Bhaskar.png";
import Digital_Ocean from "../assets/images/Digital Ocean.png";
import FabHotels from "../assets/images/FabHotels.png";
import FestPav from "../assets/images/FestPav.jpg";
import Hack_Society from "../assets/images/Hack_Society.jpg";
import HackerEarth from "../assets/images/HackerEarth.png";
import InkMonk from "../assets/images/InkMonk.png";
import KnowAFest from "../assets/images/KnowAFest.png";
import MyFM from "../assets/images/MyFM.png";
import Paytm from "../assets/images/PayTm.jpg.png";
import Swiggy from "../assets/images/Swiggy.png";
import CollegeFever from "../assets/images/The_College_Fever.png";
import arrow from "../assets/images/title_arrow.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Sponsor = () => {

    useEffect(() => {
        gsap.to(".sponsorsScrollContainer", { x: -500, duration: 3, scrollTrigger: { trigger: ".sponsorsScrollContainer", scrub: true, start: "top 80%", end: "top -10%", invalidateOnRefresh: true } })
    })

    const sponsors = [
        CK,
        CodeChef,
        Dainik_Bhaskar,
        Digital_Ocean,
        FestPav,
        FabHotels,
        Hack_Society,
        HackerEarth,
        InkMonk,
        KnowAFest,
        Swiggy,
        MyFM,
        Paytm,
        CollegeFever
    ];

    const result = [];

    for (let i = 0; i < sponsors.length; i++) {
        result.push(
            <Slider.Slide className="mx-4 aspect-square md:mx-2 sponsorBoxes" key={i}>
                <div className="border-2 border-[#c2ff3f] rounded-full aspect-square w-[300px] flex justify-center items-center p-3 bg-[#c2ff3f] overflow-clip">
                    <img src={sponsors[i]} alt="" />
                </div>
            </Slider.Slide>
        )
        i++;
        result.push(
            <Slider.Slide className="mx-4 aspect-square  md:mx-2 sponsorBoxes" key={i}>
                <div className="border-4 border-[#c2ff3f] rounded-full aspect-square w-[300px] flex justify-center items-center p-3 bg-transparent overflow-clip">
                    <img src={sponsors[i]} alt="" />
                </div>
            </Slider.Slide>
        );
        i++;
        if (i != sponsors.length)
            result.push(
                <Slider.Slide className="mx-4 aspect-square sponsorBoxes md:mx-2 " key={i}>
                    <div className="border-2 border-[#f7f7f7] rounded-full aspect-square w-[300px] flex justify-center items-center p-3 bg-[#f7f7f7] overflow-clip">
                        <img src={sponsors[i]} alt="" />
                    </div>
                </Slider.Slide>
            );
    }

    return (
        <>
            <section className="sponsorsContainer overflow-x-hidden lg:w-screen xl:w-full">
                <div className="w-full pt-60 pl-24 textContainer xl:pt-72">
                    <p className="flex items-center flex-row preText">
                        <div>
                            <img className="h-5 arrowSVG" src={arrow} alt="" />
                        </div>
                        <div className="lg:text-xl xl:text-[32px] heartfelt">A Heartfelt Tribute to the</div>
                    </p>
                    <h3 className="xl:text-[230px] sponsorWindow text-[#c2ff3f] md:text-[80px] lg:text-[120px] ml-10 leading-none -mb-4 sponsorsText">SPONSORS</h3>
                    <span className="block sponsorWindow text-transparent postText2 text-6xl lg:ml-96 xl:text-[85px] fromText" id="FROM">FROM</span>
                    <span className="block sponsorWindow fromText text-[#aaa] text-6xl ml-52 xl:text-[85px]">INFOTSAV' 19</span>
                </div>
                <div className="w-full overflow-x-hidden h-screen scrollContainer">
                    <div className="-rotate-3 pt-7 mt-9 w-[200%] mx-auto -ml-40 sponsorsScrollContainer">
                        <Slider
                            className="slider"
                            duration={18}
                            pauseOnHover={true}
                            reverse={false}
                            unit="px"
                        >
                            {result}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sponsor;
