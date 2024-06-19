import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import infotsavEvents from "../../content/Events";
gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
    function handleMouseMove(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        let item = event.currentTarget as HTMLElement;
        let centerX = (item.getBoundingClientRect().left + (item as HTMLElement).offsetWidth) / 2;
        let centerY = item.getBoundingClientRect().top + item.offsetHeight / 2;
        let mouseX = event.clientX - centerX;
        let mouseY = event.clientY - centerY;
        item.style.top = `${mouseY / 5}px`;
        item.style.left = `${mouseX / 5}px`;
        item.style.transform = `scale(1.05)`;
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        let item = event.currentTarget as HTMLElement;
        item.style.top = `0px`;
        item.style.left = `0px`;
        item.style.transform = `scale(1)`;
    }

    console.log(infotsavEvents)
    useLayoutEffect(() => {
        let items = gsap.utils.toArray(".items")[0] as HTMLElement;
        let pageWrapper = document.querySelector(".page-wrapper");

        let distance = () => {
            let lastItemBounds = items.lastElementChild?.getBoundingClientRect() as DOMRect;
            let containerBounds = items.getBoundingClientRect();
            return Math.max(0, lastItemBounds.right - containerBounds.right);
        };

        gsap.to(items, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
                trigger: items,
                start: "top top",
                end: () => "+=" + distance(),
                scrub: true,
                pin: pageWrapper,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        gsap.registerPlugin(ScrollTrigger);

        document.body.style.overflow = "auto";

        const backTextWrapper = document.querySelectorAll(".background-text") as NodeListOf<HTMLElement>;

        backTextWrapper.forEach((section: HTMLElement) => {
            const textLines = section.querySelectorAll(".background-text__item") as NodeListOf<HTMLElement>;

            textLines.forEach(function (line, index) {
                const [x, xEnd] = index % 2
                    ? [window.innerWidth, (line.scrollWidth - section.offsetWidth) * -1]
                    : [line.scrollWidth * -1, 0];

                gsap.fromTo(
                    line,
                    { x },
                    {
                        x: xEnd,
                        scrollTrigger: {
                            trigger: section,
                            scrub: 0.5,
                            start: 'top 75%',
                            end: 'top top',
                            // markers: true
                        }
                    }
                );
            });
        });
    }, []);

    return (
        <div>
            <div className="page-wrapper">
                <ul className="background-text">
                    <li className="background-text__item ">Previously at</li>
                    <li className="background-text__item bti2 ">Infotsav</li>
                </ul>
                <section className="section">
                    <div className="container">
                        <ul className="items scrollx-section" style={{ display: 'flex', width: '200%' }}>
                            {
                                infotsavEvents.map((event, i) => {
                                    return (
                                        <li className="item" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} key={i} style={{ backgroundImage: `url(${event.image})` }}>
                                            <div className="ct">
                                                <div className="text-cont">{event.heading}</div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
                {/* <div className="spacer">spacer</div>
                <section className='next-sections'>
                    <div className="container">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                </section>
                <div className="spacer">spacer</div> */}
            </div>
        </div>
    );
}
