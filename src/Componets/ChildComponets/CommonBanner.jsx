
export default function CommonBanner(props) {
  return (
    <>
   <div className="site-banner relative bg-[scroll] md:bg-fixed  z-10 common-banner bg-cover bg-no-repeat py-[7rem] lg:py-[10rem] " style={{backgroundImage:`url(${props.bgImg}`, backgroundPosition:'center center'}}>
    <div className="container">
        <div className="banner-head ">
            <h1 className="banner-head-text text-center lg:text-[50px] text-[#FFF] md:text-[40px] text-[30px] font-[500] lending-[1.1em] ">{props.heading}</h1>
        </div>
    </div>
   </div>
   </>
  )
}

