

export default function FooterPhone() {
    return (
        <>
            <div className="phone-div flex items-start mb-3 ">
                <div className="phone-icon w-[12%]">
                    <i className="fas fa-phone-alt"></i>
                </div>
                <div className="phone-content w-[88%]">
                    <div className="phone-heading">
                        <h5 className="contant-heading">Phone</h5>
                    </div>
                    <div className="number-box mt-2 ">
                        <a href="/" className="flex items-center mb-1">
                            <span className="num-icon w-[10%]">
                                <img src="./images/United-States-Flag.0a54b15dedf2858f611bb199aa7578d7 (1).png" alt="" />

                            </span>
                            <span className="num w-[90%]">
                                +1 331 333 8521
                            </span>
                        </a>
                        <a href="/" className="flex align-baseline">
                            <span className="num-icon w-[10%]">
                                <img src="./images/India-Flag.b937a52a817f21f86b3e5449c4b0abc3.png" alt="" />

                            </span>
                            <span className="num w-[90%]">
                                +91 915 7898 914
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="phone-div flex items-start mb-3">
                <div className="phone-icon w-[12%]">
                <i className="fas fa-envelope"></i>
                </div>
                <div className="phone-content w-[88%]">
                    <div className="phone-heading">
                        <h5 className="contant-heading">Email</h5>
                    </div>
                    <div className="number-box mt-2 ">
                        <a href="mailto:info@droptechnolab.com" className="flex items-center mb-1">
                            info@droptechnolab.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="phone-div flex items-start mb-3">
                <div className="phone-icon w-[12%]">
                <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                </div>
                <div className="phone-content w-[88%]">
                    <div className="phone-heading">
                        <h5 className="contant-heading">Address</h5>
                    </div>
                    <div className="number-box mt-2 ">
                       
                        <p className="flex align-baseline">
                            
                            <span className="num w-[90%]">
                            202 Avani Icon, Near Shalby Hospital, Haridarshan Cross Road, New Naroda, Ahmedabad - 382330
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
