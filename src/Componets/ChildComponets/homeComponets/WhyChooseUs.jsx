import SectionHead from "../SectionHead"
import IconContentBox from "./IconContentBox"
export default function WhyChooseUs() {
    return (
        <>
            <div className="whychooseus-section pt-[100px] pb-[70px]">
                <div className="container">
                    <SectionHead sectionHead={"Why Choose Us"} sectionTagline={"Because “we’re converting great ideas into great apps by great people.” We provide you truly leading IT solutions for your better business growth."} />
                    <div className="whychoose-content pt-[50px]">
                        <div className="whychoose-row flex md:flex-nowrap flex-wrap">
                            <div className="left-col lg:w-[33.33%] md:w-[50%] w-[100%]">
                                <div className="icon-box__main mb-[50px]">
                                    <IconContentBox imgScr={"./images/client-first-white.png"} heading={"Client First"} />
                                </div>
                                <div className="icon-box__main mb-[50px]">
                                    <IconContentBox imgScr={"./images/client-first-white.png"} heading={"Client First"} />
                                </div>
                            </div>
                            <div className="center-col w-[33.33%] hidden lg:block">
                                <div className="mobile-img ">
                                    <img src="./images/mobile-223x300.png" className="mx-[auto]" alt="" />
                                </div>
                            </div>
                            <div className="right-col lg:w-[33.33%] md:w-[50%] w-[100%]">
                            <div className="icon-box__main mb-[50px]">
                                    <IconContentBox imgScr={"./images/client-first-white.png"} heading={"Client First"} />
                                </div>
                                <div className="icon-box__main mb-[50px]">
                                    <IconContentBox imgScr={"./images/client-first-white.png"} heading={"Client First"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
