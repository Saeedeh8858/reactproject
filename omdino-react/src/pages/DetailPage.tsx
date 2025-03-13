import { Breadcrumb } from "../components/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure autoplay styles are included
import "swiper/css/thumbs";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";
import "../resources/dest/css/swiper.css";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import "../resources/dest/css/Detail.css";
import { TodayPackages } from "../components/TodayPackages";


export const DetailPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const location = useLocation();
    const { packag } = location.state || {}; // Get package details from location state
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(prevState => !prevState);
    };

    if (!packag) {
        return <div></div>;
    }

    return (
        <>
            <Breadcrumb pageName={packag.name} />
            <div className="container">
                <div className="row mt-lg-4 mt-md-4 mt-2">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 stopSticky">
                        <div className="row p-relative mb-3 packageBtn">
                            <div className="col-12">
                                <Swiper
                                    modules={[Navigation, Autoplay, Thumbs]}
                                    spaceBetween={10}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    navigation
                                    centeredSlides={true} // ✅ Centers the main image
                                    slidesPerView={1.5} // ✅ Shows partial images on the sides
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="main-swiper"
                                >
                                    {packag.images.map((image: string, index: number) => (
                                        <SwiperSlide key={index}>
                                            <div className="item"><img src={image} alt={`image-${index}`} className="img-fluid" /></div>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                        </div>
                        {/* <!--END OF BIG SLIDER--> */}
                        <div className="row m-0" id="thumbs">
                            <Swiper
                                modules={[Navigation, Autoplay, Thumbs]}
                               // onSwiper={setThumbsSwiper}
                                loop={true} // ✅ Enables infinite scrolling
                                loopFillGroupWithBlank={true} // ✅ Prevents gaps when images are less
                                spaceBetween={10}
                                slidesPerView={6} // ✅ Show multiple thumbnails
                                watchSlidesProgress
                                className="thumb-swiper mt-2"
                            >
                                {packag.images.map((image: string, index: number) => (
                                    <SwiperSlide key={index}>
                                        <div className="item"><img src={image} alt={`image-${index}`} className="img-fluid rounded-1" /></div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {/* <!-- END OF THUMBNAIL SLIDER--> */}
                    </div>
                    {/* <!----> */}
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 ps-xl-2">
                        {/* <h2 className="style-30 mb-xl-4 mt-xl-0 mt-1 mb-0 text-start"><strong>{packag.name}</strong></h2> */}
                        <div className="d-flex mb-xl-4 mb-1">
                            <span className="me-md-5 me-1 style-17-lh35 --gray80 d-flex align-items-center">
                                <svg className="text-9e me-1 iconSvg" stroke="currentColor" width="20.686" height="20.495" viewBox="0 0 20.686 20.495">
                                    <use href="assets/svgs/svgs.svg#icon-tag"></use>
                                </svg>
                                {packag.category}
                            </span>
                            <span className="style-17-lh35 --gray80">
                                <svg className="me-4 iconSvg --gray" stroke="currentColor" width="16.5" height="15.765" viewBox="0 0 16.5 15.765">
                                    <use href="assets/svgs/svgs.svg#star"></use>
                                </svg>
                                3.5 out of 5 (25 votes)
                            </span>
                        </div>
                        {/* <!----> */}
                        <div className="row">
                            <div className="col-xl-8 col-md-8 col-12 mb-xl-0 mb-1">
                                <div className="card ">
                                    <div className="p-3 pb-0">
                                        <div className="d-flex  style-17-lh35 --gray80">
                                            Minimum Purchase Quantity :
                                            <div className="style-17-lh35 --black ms-4">{packag.Items} Items</div>
                                        </div>
                                        {/* <!----> */}
                                        <div className="d-flex style-17-lh35 --gray80">
                                            Order Conditions
                                            <div className="style-17-lh35 --black ms-4">Warranty Check Required</div>
                                        </div>
                                    </div>
                                    {/* <!----> */}
                                    <div className="border-dashed d-flex text-bold bottom repeated-x normal gray pb-1 mb-1 ps-2">
                                        <span className="text-yellow style-17-lh35"><strong>Other Product Specifications</strong>  </span>
                                        <svg className="text-yellow ms-1 iconSvg align-text-bottom" width="25" fill="none" stroke="currentColor" viewBox="0 0 22.681 17.258">
                                            <use href="assets/svgs/icon-chevron-left.svg"></use>
                                        </svg>
                                    </div>
                                    <div className="d-flex ps-2 style-17-lh35">
                                        <p className="style-17-lh35 --gray80 border-dashed bottom repeated-x normal gray pb-1"> Custom Order Capability   : </p>
                                        <span className="text-green ms-4"><strong>Yes</strong></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-12">
                                <div className="bg-f5 py-3 rounded-1">
                                    <div className="d-flex items-start border-dashed bottom repeated-x normal gray px-3 pb-3 mb-3">
                                        <img src="assets/image/Nika_logo.png" className="me-1 bg-iconSvg" alt="logoNika" />
                                        <div className="d-flex flex-column">
                                            <strong>{packag.brand}</strong>
                                            <span className="text-9e">{packag.location}</span>
                                        </div>
                                    </div>
                                    {/* <!----> */}
                                    <div className="d-flex text-start px-3">
                                        <span className="me-1 bg-iconSvg">
                                            <svg className="iconSvg --green" stroke="currentColor" width="18" height="18" viewBox="0 0 15.414 14.316">
                                                <use href="assets/svgs/svgs.svg#check-square"></use>
                                            </svg>
                                        </span>
                                        <div className="d-flex flex-column">
                                            <strong>{packag.instock ? "In Stock" : "Out of Stock"} </strong>
                                            <span className="text-9e">{packag.instock ? packag.shipping : "Not available"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!----> */}
                        <div className="row">
                            <div className="d-flex align-items-center style-17-lh35 --gray80 my-3">
                                <img src="assets/svgs/Icon feather-hexagon.svg" className="me-2" alt="svgicon" />
                                Product Size and Color
                            </div>
                            <div className="col-12 d-flex align-align-items-center item-color">
                                {packag.colors.map((color: string, index: number) => (
                                    <div key={index} className="gradientBg me-2 rounded-1 overflow-hidden d-flex align-items-center flex-column">
                                        <img src={color} className="img-fluid" alt={'color-${index}'} />
                                        <div className="style-15-lh35-n fs-13 card-title__ellipsis">{packag.size}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-12 d-flex align-align-items-center my-2">
                                {packag.sizes.map((size: string, index: number) => (
                                    <div key={index} className="col-auto me-lg-15 me-md-15 me-1" g-ref="slide">
                                        <input type="checkbox" className="btn-check" id="sizeM" autoComplete="off" />
                                        <label className="card px-3 py-0 text-uppercase style-17-lh35 lblSize" htmlFor="sizeM">
                                            <span>{size}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">               
                {/* accordion */}
                <div className="col-12 mb-2">
                    <div className="accordion accordion-flush mt-md-5 my-3">
                        <h2 className="accordion-header d-flex align-items-center justify-content-center heading-half-circle bg-circle sm-half-circle">
                            <button
                                className={`accordion-button ${isOpen ? '' : 'collapsed'} w-auto style-20-black-600 border-btm --yellowBorder`}
                                type="button"
                                onClick={toggleAccordion}
                                aria-expanded={isOpen}
                                aria-controls="acc-1"
                            >
                                Product Specifications            
                            </button>
                        </h2>

                        <div id="acc-1" className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne">
                            <div className="accordion-body text-start">
                            {packag?.detail || "No product details available."}
                            </div>
                        </div>
                    </div>
                </div>
                {/* accordion */}

                <div className="col-12 d-flex align-items-center justify-content-center my-md-4">
                    <h1 className="style-26-lh39 black border-dashed repeated-x bold bottom yellow pb-10 mx-auto my-30 pt-30  d-flex items-center justify-center toast-container">
                        <svg stroke="currentColor" className="text-yellow iconSvg me-6" width="20.686" height="20.495" viewBox="0 0 20.686 20.495">
                            <use href="svgs.svg#icon-tag"></use>
                        </svg>
                        <strong>Similar Products</strong>

                    </h1>
                </div>
                <TodayPackages />
            </div>
        </>
    );
}