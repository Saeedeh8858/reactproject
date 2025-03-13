import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure autoplay styles are included
import { Navigation, Autoplay } from "swiper/modules";
import "../resources/dest/css/swiper.css";
import { useEffect, useState } from 'react';
import { fetchMenCat } from "../api/fetchapi";

export const MenCat = () => {
    interface special {
        id: number;
        catName: string;
        mainImage: string,
    }

    const [specialCats, setSpecialCats] = useState<special[]>([]);

    useEffect(() => {
        fetchMenCat().then(setSpecialCats);
    }, []);


    return (
        <div className="_6BoxOwl carousel_modular2 wide_carousel_controls position-relative mt-md-4 mt-2 d-flex align-items-center">         
                <Swiper
                    modules={[Navigation, Autoplay]} // ✅ Add Autoplay
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 300000, disableOnInteraction: false }} // ✅ Autoplay Config
                    navigation
                    breakpoints={{
                        320: { // Mobile
                            slidesPerView: 3,
                        },
                        768: { // Tablet
                            slidesPerView: 5,
                        },
                        1024: { // Desktop
                            slidesPerView: 7,
                        }
                    }}
                >
                    {specialCats.map((specialCat, index) => (
                        <SwiperSlide>
                            <div className="_6BoxOwl--box  ml-20 d-flex flex-column border justify-center justify-center items-center">
                                <img src={specialCat.mainImage} className="--radiuseTop img-fluid" />
                                <span className="style-20 --black my-10 client-cell__body card-title__ellipsis">{specialCat.catName}</span>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
        </div>
    );

}

