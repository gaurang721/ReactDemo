import DTLSQuerBox from '../DTLSQuerBox'

export default function CompleteSection() {
    return (
        <>
        <div className="completed-section bg-[#F0F1FE] py-[50px] md:py-[70px] lg:py-[100px]]">
            <div className="container">
                <div className="complete-head">
                    <h2 className="complete-head-txt text-center leading-[1.1em] font-[600] text-[25px] md:text-[35px] lg:text-[50px]">We Have  Completed <span className="text-[#086ad8]">4000+ </span> Projects <span className="text-[#086ad8]">Successfully</span></h2>
                </div>
                <div className="complate-box flex flex-wrap md:mx-[-15px] mx-[0px]  mt-[70px]">
                    <div className="complate-box-col lg:w-[25%] md:w-[50%] w-[100%]  mb-10">
                    <DTLSQuerBox imgSrc={"../images/checkmark-icon-1.png"}  heading={"4000+"} description={"Completed Project"} />
                    </div>
                    <div className="complate-box-col lg:w-[25%] md:w-[50%] w-[100%]  mb-10 ">
                    <DTLSQuerBox imgSrc={"../images/happy-icon.png"}  heading={"600+"} description={"Happy Clients"} />
                    </div>
                    <div className="complate-box-col lg:w-[25%] md:w-[50%] w-[100%]  mb-10 ">
                    <DTLSQuerBox  imgSrc={"../images/multi-service.png"} heading={"500+"} description={"Multi Services"} />
                    </div>
                    <div className="complate-box-col lg:w-[25%] md:w-[50%] w-[100%]  mb-10 ">
                    <DTLSQuerBox  imgSrc={"../images/trophy-icon.png"} heading={"95%"} description={"Retention Ratio"} />
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
