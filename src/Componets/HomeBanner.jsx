import DTLButton from './DTLButton'

export default function HomeBanner() {
    return (
        <>
            <div className="home__banner pt-32 md:pt-40 pb-24   bg-cover bg-no-repeat " style={{
                backgroundImage: `url("./images/banner-bg1.jpg")`, backgroundPosition: 'bottom center'
            }}>
                <div className="container">
                   <div className="row flex lg:flex-nowrap flex-wrap">
                   <div className="col-left w-[100%] md:w-[50%]  md:text-left sm:px-0 pb-10 px-0">
                        <div className="home-banner__head pb-12 ">
                            <h5 className="home-banner__head-text  text-[30px] md:text-[40px] lg:text-[55px]  font-[500] pb-4">White Label Development Agency</h5>
                            <p className='text-[20px] font-[400] leading-[1.5rem] lg:pr-20'>A team of highly experienced experts and skilled developers to provide you with any kind of web development services.</p>
                        </div>
                        < DTLButton btnText={"Get Started"} />
                    </div>
                    <div className="col-right  w-[100%] md:w-[50%]">
                        <div className="home-banner__img">
                            <img src="./images/main-img3-2-768x553.png" className='w-full' alt="" />
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}
