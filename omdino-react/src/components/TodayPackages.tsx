import { Swiper, SwiperSlide } from "swiper/react";
import "../resources/dest/css/TodayPackages.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure autoplay styles are included
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from 'react';
import { fetchPackages } from "../api/fetchapi";
import { useNavigate } from 'react-router-dom';

export const TodayPackages = () => {

    interface packag {
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
        detail:string

    }

    const [packages, setPackages] = useState<packag[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPackages().then(setPackages);
    }, []);

    const handleMoreInfoClick = (packag: packag) => {
        navigate("/detail", { state: { packag } }); // Pass the item details as state
    };

    return (
        <div className="container">
           
            <div className="p-relative mt-4 --extre packageBtn">
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
                            slidesPerView: 3,
                        },
                        1024: { // Desktop
                            slidesPerView: 4,
                        }
                    }}
                >
                    {packages.map((packag, index) => (
                        <SwiperSlide key={index}>
                            <div className="card pb-1">
                                <div className="itemImage  ratio-card card-top-basis">
                                    <img src={packag.images?.length > 0 ? packag.images[0] : "assets/image/placeholder.jpg"} id="will-removed" className="of-cover visible-in-hover w-100" />

                                </div>
                                <div className="col text-center">
                                    <h2 className="style-20-black-600 py-3 client-cell__body card-title__ellipsis">{packag.name}</h2>
                                    <div className="d-flex align-items-center justify-content-center mb-1">
                                        <span className="text-9e">Main Price  : </span>
                                        <span className="d-flex">
                                            {packag.price}
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center fs-md-17">
                                        <span className="text-9e">Your Benefit  : </span>
                                        <span className="">{packag.discountAmount} Euro</span>
                                    </div>
                                    <p className="style-26-lh39 --yellow py-4">{(packag.price - (packag.discountAmount || 0)).toFixed(2)} Euro</p>
                                </div>
                                <button className="btn public-btn --absoluted --yellowBg invisible"  onClick={() => handleMoreInfoClick(packag)}>
                                    {/* <img src="assets/svgs/Icon feather-plus-square.svg" className="me-1 iconSvg" /> */}
                                    More Information
                                </button>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}