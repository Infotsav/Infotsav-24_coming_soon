// import React from 'react'
import {
    CircleArrowUp,
    Instagram,
    Linkedin,
    Mail,
    SquareArrowOutUpRight,
} from "lucide-react"


function Footer() {
    return (
        <div className="w-screen bg-black px-5 md:px-10 text-[#ccc] z-50 absolute">
            <div className="flex flex-col md:flex-row md:justify-between items-center font-mono my-5 gap-5 md:my-10">
                <div className="flex flex-col self-start">
                    <span className="font-bold text-2xl mb-2">
                        Join Us Now!
                    </span>
                    <div className="border border-[#ccc] hover:border-white py-1 px-3 rounded-full flex items-center hover:text-white text-[#c2ff3f] cursor-pointer">
                        For More Details Contact : infotsav@iiitm.ac.in
                        <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-2xl mb-2 text-[#c2ff3f]">
                        Get in touch
                    </span>
                    <div className="flex justify-around cursor-pointer">
                        <div className="hover:text-white">
                            <a href="https://linkedin.com/company/infotsav-iiit-gwalior/">
                                <Linkedin />
                            </a>
                        </div>
                        <div className="hover:text-white">
                            <a href="https://www.instagram.com/infotsav_iiitm/">
                                <Instagram />
                            </a>
                        </div>
                        <div className="hover:text-white">
                            <a href="https://x.com/infotsav">
                                <svg x="0px" y="0px" className="h-6 w-6 stroke-[#ccc] fill-[#ccc] hover:stroke-white hover:fill-white" viewBox="0 0 50 50">
                                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="hover:text-white">
                            <a href="mailto:infotsav@iiitm.ac.in">
                                <Mail />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center ">
                <h1 className="xl:text-[230px] sponsorWindow text-[#c2ff3f] md:text-[70px] lg:text-[120px] ml-10 leading-none -mb-4 sponsorsText">
                    Infotsav
                </h1>
                <button onClick={() => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}>
                    <CircleArrowUp className="w-[14vw] h-[10vw] text-[#ccc]" />
                </button>
            </div>
        </div>
    )
}

export default Footer
