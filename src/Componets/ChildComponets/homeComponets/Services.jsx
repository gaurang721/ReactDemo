import SectionHead from "../SectionHead"
import DTLSQuerBox from "../DTLSQuerBox"

export default function Services() {
    return (
        <>
            <div className="services bg-[#F0F4F8] lg:py-[100px] md:py-[70px] py-[50px]" >
                <div className="container">
                    <SectionHead sectionHead={"Services"} sectionTagline={"Drop Techno Lab provides best customer focused services and build your ideas into reality. Our masterliness in desktop and open source customized development."} />
                    <div className="services-row flex flex-wrap mt-10 md:mx-[-15px] mx-[0px]">
                        <div className="dtl-common__squer-box-main  cursor-pointer lg:w-[33.33%] md:w-[50%] w-[100%] mb-[30px]">
                            <DTLSQuerBox imgSrc={"../images/wordpress-logo-1.png"} heading={"WordPress Development"} description={"We are the team of IT skilled experts who provide you any type of WordPress development services."} boxButton={{ buttonName: "Read More", buttonLink: "/" }} imgbg={"#79E8E2"} /></div>
                        <div className="dtl-common__squer-box-main  cursor-pointer lg:w-[33.33%] md:w-[50%] w-[100%] mb-[30px]">
                            <DTLSQuerBox imgSrc={"../images/icons8-shopping-cart-32.png"} heading={"E-Commerce Development"} description={"We are here to build any kind of e-commerce website for your better business growth."} boxButton={{ buttonName: "Read More", buttonLink: "/" }} imgbg={"#FE929F"} /></div>
                        <div className="dtl-common__squer-box-main  cursor-pointer lg:w-[33.33%] md:w-[50%] w-[100%] mb-[30px]">
                            <DTLSQuerBox imgSrc={"../images/php-logo.png"} heading={"PHP Development"} description={"We provide all kind of desktop web PHP development services and open source customizations."} boxButton={{ buttonName: "Read More", buttonLink: "/" }} imgbg={"#84B7FD"} /></div>
                        <div className="dtl-common__squer-box-main  cursor-pointer lg:w-[33.33%] md:w-[50%] w-[100%] mb-[30px]">
                            <DTLSQuerBox imgSrc={"../images/js-30.png"} heading={"JavaScript Development"} description={"We provide all kind of services for next generation frontend and backend JavaScript development."} boxButton={{ buttonName: "Read More", buttonLink: "/" }} imgbg={"#FCC774"} /></div>
                        <div className="dtl-common__squer-box-main  cursor-pointer lg:w-[33.33%] md:w-[50%] w-[100%] mb-[30px]">
                            <DTLSQuerBox imgSrc={"../images/website-maintanance.png"} heading={"Website Maintanance"} description={"We provide you a hasslefree maintananace service option for your website."} boxButton={{ buttonName: "Read More", buttonLink: "/" }} imgbg={"#DEB0FE"} /></div>
                        <div className="dtl-common__squer-box-main  cursor-pointer lg:w-[33.33%] md:w-[50%] w-[100%] mb-[30px]">
                            <DTLSQuerBox imgSrc={"../images/web-consultancy-icon.png"} heading={"Web Consultancy"} description={"As a web consultancy we provide all kinds of custom services and guidance to assist our clients."} boxButton={{ buttonName: "Read More", buttonLink: "/" }} imgbg={"#2E1342"} /></div>{/*  */}
                    </div>
                </div>
            </div>
        </>
    )
}
