import { MaskContainer } from "./ui/svg-mask-effect";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn,
} from "react-scroll-motion";


export default function HeroSection() {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

    return (
        <>

            <ScrollContainer className="text-white w-full">
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>

                        <span style={{ fontSize: "30px" }}>
                            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                                Join the Central India's Largest Tech Fest!
                            </h1>
                        </span>

                    </Animator >
                </ScrollPage >

                <ScrollPage className="h-screen w-full">
                    <Animator animation={ZoomInScrollOut}>
                        <div className="h-screen w-full flex items-center justify-center  overflow-hidden">


                            <div className="h-screen w-full flex items-center justify-center  overflow-hidden">
                                <MaskContainer
                                    revealText={
                                        <p className="text-vw-13 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-customFont1 text-center font-sans font-bold">
                                            Infotsav'24
                                        </p>
                                    }
                                    className="h-screen w-full border rounded-md"
                                >
                                    <p className="text-vw-5 leading-10 text-customFont1 font-black inter-var text-center">
                                        Coming Soon
                                    </p>
                                </MaskContainer>
                            </div>


                        </div>
                    </Animator>
                </ScrollPage>

            </ScrollContainer >
        </>
    );
}
