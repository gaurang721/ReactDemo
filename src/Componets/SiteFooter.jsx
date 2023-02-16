import SiteLogo from './ChildComponets/SiteLogo'
import NavMenu from "./ChildComponets/NavMenu"
import FooterPhone from "./ChildComponets/FooterPhone"

export default function SiteFooter() {
    return (
        <>
            <div className="site-footer py-[50px]" >
                <div className="container">
                    <div className="site-footer__row flex flex-wrap lg:flex-nowrap  lg:flex-row">
                        <div className="site-footer__col w-[100%] lg:w-[32%] pr-16  mb-4">
                            <div className="footer-logo pb-2">
                                <SiteLogo img="./images/download-2.png" />
                            </div>
                            <div className="footer-content">
                                <div className="footer-tagline">
                                    <h4 className='mb-3'>DTL Digital Business Solutions Private Limited</h4>
                                    <p className='footer__content-text'>Anything is possible when we are connected. At DropTechno Lab we build all types of web app development, E-commerce website and provide all types of IT solutions and services. In short, <span className='font-bold'>“we do ordinary things in an extraordinary way.”</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="site-footer__col w-[100%] md:w-[33.33%] lg:w-[16%] mb-4">
                            <div className="important-link">
                                <h6 className='fotter_nav-list-head'>Important Links</h6>
                                <ul className="footer__nav-list">
                                    <NavMenu navItem="About Us" link={"/about-us"} />
                                    <NavMenu navItem="Services" />
                                    <NavMenu navItem="Contact Us" />
                                    <NavMenu navItem="Blog" />
                                    <NavMenu navItem="Case Studies" />
                                    <NavMenu navItem="Jobs" />
                                    <NavMenu navItem="Life at DTL" />
                                </ul>
                            </div>
                        </div>
                        <div className="site-footer__col w-[100%] md:w-[33.33%] lg:pl-12 lg:w-[26%] mb-4">
                            <div className="important-link">
                                <h6 className='fotter_nav-list-head'>Featured Service</h6>
                                <ul className="footer__nav-list">
                                    <NavMenu navItem="WordPress Development" />
                                    <NavMenu navItem="E-Commerce Development" />
                                    <NavMenu navItem="Website Maintanance" />
                                    <NavMenu navItem="Web Consultancy" />
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="site-footer__col w-[100%] md:w-[33.33%] lg:w-[26%] mb-4">
                            <div className="important-link">
                                <h6 className='fotter_nav-list-head'>Contact</h6>
                                <FooterPhone />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
