import NavMenu from "./ChildComponets/NavMenu"
import SiteLogo from "./ChildComponets/SiteLogo"



export default function SiteHeader() {
  const NavToggel =()=>{
    if (!document.querySelector(".nav_list").classList.contains("Navshow")) {
      document.querySelector(".nav_list").classList.add("Navshow")
    }else{
      document.querySelector(".nav_list").classList.remove("Navshow")
    }

  }
  return (
    <>

      <div className="site-Header py-2.5 fixed w-full z-50 bg-[#FFF]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className=" w-full  md:w-1/4 md:block flex justify-between items-center">
              <div className="sitelogo"><SiteLogo img="./images/download-2.png" /></div>
             <div className="nav-icon items-center flex md:hidden"><i className="fas fa-search"></i> <button className="pl-3.5 block md:hidden" onClick={NavToggel}><i className="fas fa-bars"></i></button></div>
            </div>
            <div className=" flex items-center justify-end md:w-3/4 w-full bg-[#FFF]">
              <ul className="nav_list hidden list-none md:flex flex-col md:flex-row w-full justify-start md:justify-end items-start md:items-center">
                <NavMenu navItem="home" link={"/"} />
                <NavMenu navItem="Services" link={"/services"} childClass={"subitem"} childitem={["WordPress Development", "E-Commerce Development", "PHP Development", "JavaScript Development", "Website  Maintanance", "Web Consultancy"]} />
                <NavMenu navItem="Case Studies" link={"/case-studies"} />
                <NavMenu navItem="Blog" link={"/blog"} />
                <NavMenu navItem="About Us" link={"/about-us"} childClass={"subitem"} childitem={["About DTL", "Jobs", "Life at DTL"]} />
                <NavMenu navItem="Contact Us " link={"/contact-us"} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
