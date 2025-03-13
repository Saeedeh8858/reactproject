
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure autoplay styles are included
import { Navigation, Autoplay } from "swiper/modules";
import "../resources/dest/css/swiper.css";
import { useEffect, useState } from 'react';
import { fetchMainCat } from "../api/fetchapi";

export const MainCat = () => {
 interface maincat {
            id: number;
            catName: string;           
            mainImage: string,    
        }
    
        const [MainCats, setMainCats] = useState<maincat[]>([]);
    
        useEffect(() => {
            fetchMainCat().then(setMainCats);
        }, []);

    return (
        <div className="p-relative mt-md-4 mt-2 d-flex align-items-center swipereight">
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
                  slidesPerView: 8,
                }
              }}
            >   
              { MainCats.map((MainCat, index) => ( 
                <SwiperSlide  key={index}>
                    <div className="ml-2 d-flex flex-column  justify-content-center  align-items-center rounded-1 bg-white _8BoxOwl--box">
                    <img src={MainCat.mainImage}/>
                    <span className="mt-md-2">{MainCat.catName}</span>
                    </div>
                
                </SwiperSlide>
               ))}
        </Swiper>
    </div>

    );
}