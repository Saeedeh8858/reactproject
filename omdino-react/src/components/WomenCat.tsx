import { Swiper, SwiperSlide } from "swiper/react";
import "../resources/dest/css/TodayPackages.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure autoplay styles are included
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchWomenCat } from "../api/fetchapi";


export const WomenCat = () => {
    interface WomenPackage {
        id: number;
        location:string;
        name: string;
        brand: string;
        price: number;
        discount: boolean;
        discountAmount: number;
        images: string[];
        mainImage: string,
        colors: string[];
        sizes: string[];
        tinyImages:string[];
        Items: number,
        instock: boolean,
        shipping: string,
        Category:string,
        detail: string

    }
    
  

    const [womenCats, setWomenCats] = useState<WomenPackage[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchWomenCat().then(setWomenCats);
    }, []);
    
    const handleMoreInfoClick = (packag: WomenPackage) => {
        navigate("/detail", { state: { packag } }); // Pass the item details as state
    };


    return (
        <div className="container">
            <div className="row py-md-5 py-3">
                <div className="d-none d-md-inline-block col-lg-3 col-md-4">
                    <div className="cat-img shoes-cat w-100 p-relative ratio ratio-card">
                        <img src="assets/image/Womenshoes.jpg" className="of-contain" />
                    </div>
                    <button className="btn public-btn-sm text-white w-max fs-14">View All</button>
                </div>
                <div className="col-12 col-lg-9 col-md-8">
                    <div className="d-flex owl3Box --extre p-relative packageBtn">
                        <Swiper
                            modules={[Navigation, Autoplay]} // ✅ Add Autoplay
                            spaceBetween={10}
                            loop={true}
                            autoplay={{ delay: 300000, disableOnInteraction: false }} // ✅ Autoplay Config
                            navigation
                            breakpoints={{
                                320: { // Mobile
                                    slidesPerView: 2,
                                },
                                768: { // Tablet
                                    slidesPerView: 2,
                                },
                                1024: { // Desktop
                                    slidesPerView: 3,
                                }
                            }}
                        >
                            {womenCats.map((womenCat, index) => (
                                <SwiperSlide  key={index}>
                                    <div className="card pb-md-3">
                                        <div className="itemImage  ratio-card card-top-basis">
                                            <span className="p-absolute d-flex bg-iconSvg svg-tag rounded-circle w-auto h-auto">
                                                <img src="assets/svgs/Icon-bookmark.svg" />
                                            </span>
                                            <img src={womenCat.images[0]} id="will-removed" className="of-cover visible-in-hover" />
                                            {/* <img src="assets/image/sandal.png" id="will-removed2" className="of-cover unvisible-in-hover" /> */}
                                        </div>
                                        <div className="text-center px-10">
                                            <h2 className="style-20-black-600 pt-md-3 pt-1 client-cell__body card-title__ellipsis">{womenCat.name}</h2>
                                            <div className="d-flex align-items-center justify-content-center mb-2">
                                                <span className="text-9e">Minimum</span>
                                                <span className="text-9e">{womenCat.Items} items </span>
                                            </div>
                                            <div className="bg mb-5 d-flex flex-md-row flex-column align-items-center justify-content-center bg-f5 mx-auto rounded-1 w-max p-md-6">
                                                <span className="me-1 mb-1">
                                                    <svg className="iconSvg" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="15.414" height="14.316" viewBox="0 0 15.414 14.316"><g transform="translate(-3.5 -3.5)"><path className="a" d="M13.5,10.789l2.053,2.053L22.395,6" transform="translate(-4.895 -0.816)" /><path className="a" d="M16.816,10.658v4.789a1.368,1.368,0,0,1-1.368,1.368H5.868A1.368,1.368,0,0,1,4.5,15.447V5.868A1.368,1.368,0,0,1,5.868,4.5h7.526" transform="translate(0 0)" /></g></svg>
                                                    {womenCat.instock}
                                                </span>
                                                <span className="text-9e">Ships in 3 days</span>
                                            </div>
                                        </div>
                                        <button className="btn public-btn bg-white --yellow-color --absoluted" 
                                         onClick={() => handleMoreInfoClick(womenCat)} >
                                            <svg className="iconSvg me-1" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                                             width="18" height="18" viewBox="0 0 18 18"><g transform="translate(-1.342 -1.342)"><g className="a" transform="translate(-3.158 -3.158)"><path className="c" d="M6.5,4.5h14a2,2,0,0,1,2,2v14a2,2,0,0,1-2,2H6.5a2,2,0,0,1-2-2V6.5A2,2,0,0,1,6.5,4.5Z" /><path className="d" d="M 6.5 6.5 L 6.5 20.5 L 20.5 20.49999046325684 L 20.49999046325684 6.5 L 6.5 6.5 M 6.5 4.5 L 20.49999046325684 4.5 C 21.60456085205078 4.5 22.5 5.395429611206055 22.5 6.5 L 22.5 20.49999046325684 C 22.5 21.60456085205078 21.60456085205078 22.5 20.49999046325684 22.5 L 6.5 22.5 C 5.395429611206055 22.5 4.5 21.60456085205078 4.5 20.49999046325684 L 4.5 6.5 C 4.5 5.395429611206055 5.395429611206055 4.5 6.5 4.5 Z" /></g><path className="b" d="M18,12v6.545" transform="translate(-7.658 -4.931)" /><path className="b" d="M12,18h6.545" transform="translate(-4.931 -7.658)" /></g></svg>
                                            More Information
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}


                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

