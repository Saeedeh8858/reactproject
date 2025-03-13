import { Swiper, SwiperSlide } from "swiper/react";
import "../resources/dest/css/slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure autoplay styles are included
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from 'react';
import { fetchSlider, fetchTinySlider } from "../api/fetchapi";


export const HomeSlider = () => {
    interface mainSlider {
        id: number;
        title: string;
        image: string,
    }
    interface tinySlider {
        id: number;
        title: string;
        image: string,
    }

    const [sliders, setSliders] = useState<mainSlider[]>([]);
    const [tinySliders, setTinySliders] = useState<tinySlider[]>([]);

    useEffect(() => {
        fetchSlider().then(setSliders);
        fetchTinySlider().then(setTinySliders);
    }, []);
    return (
        <div className="transparentBg py-md-3 py-1">
            <div className="container">
                <div className="d-md-flex d-sm-flex d-block justify-space-between">
                    <div className="d-flex col-md-8 col-12 pe-md-3 p-0 mb-1 slider swiperbtn">
                        <Swiper
                            modules={[Navigation, Autoplay]} // ✅ Add Autoplay
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Autoplay Config
                            navigation
                        >
                            {sliders.map((slider, index) => (
                                <SwiperSlide key={index}>
                                    <img src={slider.image} className="img-fluid rounded" alt={slider.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-md-4 d-none d-md-inline-block">
                    <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            autoplay={false} // ❌ Disables autoplay
                            navigation={false} // ❌ Hides navigation buttons
                        >
                            { tinySliders.map((tinySlider, index) => (
                                <SwiperSlide key={index}>
                                    <img src={tinySlider.image} className="img-fluid rounded" alt={tinySlider.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* tinyslider down */}
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            autoplay={false} // ❌ Disables autoplay
                            navigation={false} // ❌ Hides navigation buttons
                        >
                            { tinySliders[1] && (
                                <SwiperSlide key={1}>
                                    <img src={tinySliders[1].image} className="img-fluid rounded mt-2" alt={tinySliders[1].title} />
                                </SwiperSlide>
                            )}
                        </Swiper>                            
                    </div>
                </div>
            </div>
        </div>
    );
}

