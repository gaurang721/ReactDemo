
export default function DTLSQuerBox(props) {
    const MySub = () => {
        if (props.imgbg !== undefined) {
            return props.imgbg;
        } else {
            return "#E2EDFD";
        }
    }
    return (
        <>


            <div className={`dtl-common__squer-box relative h-full text-center p-[30px] rounded-[10px] md:mx-[15px] mx-[0px] bg-[#FFF]  shadow-[0px 5px 40px 0px rgb(0 0 0 / 11%)]  `}>
                <div className={`img-div mb-[25px]  z-10 relative p-[20px] flex justify-center rounded-[50px]  h-[70px] w-[70px] mx-[auto] `} style={{ 'backgroundColor': `${MySub()}` }}>
                    <img src={props.imgSrc} alt="" />
                </div>
                <div className="heading-div relative pb-[10px] z-10">
                    <h4 className="heading-text">{props.heading}</h4>
                </div>
                <div className="description-box relative z-10">
                    <p className="description-text">{props.description}</p>
                </div>
                {props.boxButton !== undefined ? <div className="box-button relative mt-[25px] z-10 text-[15px] font-[500]">
                    <a className="box-button-link text-[#007BFF]" href="/"> {props.boxButton.buttonName}</a>
                </div> : " "}
            </div>

        </>
    )
}
