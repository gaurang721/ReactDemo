
export default function SectionHead(props) {
    return (
        <>
            <div className="common-section-head text-center ">
                <h2 className="common-section__heading text-[30px] md:text-[30px] lg:text-[50px]  mb-[20px] leading-[1.1em] text-[#212529] font-[500]">{props.sectionHead}</h2>
                <div className="h-[4px] w-[85px] mx-[auto] bg-[#086ad8] mt-[20px] relative rounded-[5px] overflow-hidden"></div>
                <p className="common-section__tagline mx-[auto] font-[400] text-[#666666] text-[16px] md:max-w-[1200px] max-w-[100%] md:text-[18px] lg:text-[20px] mt-[20px] mb-[20px] ">{props.sectionTagline}</p>
            </div>
        </>
    )
}
