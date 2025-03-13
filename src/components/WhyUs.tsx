export const WhyUs = () =>{
    return(
        <div className="container">
             <div className="row d-flex  justify-content-between mt-md-4 my-2 mb-md-5 facilities">
            <div className="d-flex align-items-center mb-1 col-md-3 col-12">
                <img src="assets/svgs/truck.svg" className="me-1" />
                <div className="d-flex flex-column">
                    <span className="style-20-black-600"> Free Shipping</span>
                    <span className="style-17-lh35 --gray">For custom package orders</span>
                </div>
            </div>
            {/* <!----> */}
            <div className="d-flex align-items-center mb-1 col-md-3 col-12">
                <img src="assets/svgs/Icon feather-package.svg" className="me-1" />
                <div className="d-flex flex-column">
                    <span className="style-20-black-600"> No Limitations</span>
                    <span className="style-17-lh35 --gray">On requested orders</span>
                </div>
            </div>
            {/* <!----> */}
            <div className=" d-flex align-items-center mb-1 col-md-3 col-12">
                <img src="assets/svgs/Icon feather-life-buoy.svg" className="me-1" />
                <div className="d-flex flex-column">
                    <span className="style-20-black-600">Exclusive Orders </span>
                    <span className="style-17-lh35 --gray">With your custom logo and symbol</span>
                </div>
            </div>
            {/* <!----> */}
            <div className="d-flex align-items-center mb-1 col-md-3 col-12">
                <img src="assets/svgs/Icon-calendar.svg" className="me-1" />
                <div className="d-flex flex-column">
                    <span className="style-20-black-600">Money-Back Guarantee </span>
                    <span className="style-17-lh35 --gray">Within the first 3 days of receiving the order</span>
                </div>
            </div>
        </div>
        </div>
    );
}