

export default function IconContentBox(props) {
  return (
   <>
      <div className="why-choose-us__main">
      <div className="why-choose-us__icon-box flex md:flex-nowrap flex-wrap  ">
        <div className="icon-box md:w-[20%] w-full md:mr-6 mb-[20px] md:mb-0">
            <div className="img-div md:mx-[0] mx-[auto]   w-[70px] h-[70px] rounded-[50px] flex items-center justify-center" style={{'backgroundImage': 'linear-gradient(225deg, #0095DA 0%, #00377B 100%)'}}>
                <img src={props.imgScr}   className="object-cover h-[40px] w-[40px]" alt="" />
            </div>
        </div>
        <div className="icon-box__content md:w-[85%] w-full">
        <div className="icon-box__content-head md:text-left text-center">
            <h4 className="content-head-text text-[22px] font-[500] leading-[1.2em] text-[#212529] mb-[15px]">{props.heading}</h4>
            <p className="content-description lg:pr-[40px] text-[#666666] text-[16] leading-[1.5em] font-[400]">For any business clients are always at the core. We always start with your ideas and we think from the perspective of your end users. And we provide a solution that solves key issues to help your business.</p>
        </div>
        </div>
      </div>
      </div>
   </>
  )
}
