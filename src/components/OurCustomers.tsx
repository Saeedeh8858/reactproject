import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure autoplay styles are included
import { Navigation, Autoplay } from "swiper/modules";
import "../resources/dest/css/TodayPackages.css";
import { useEffect, useState } from 'react';
import { fetchCustomers } from "../api/fetchapi";

export const OurCustomers = () => {
    interface customer {
            id: number;
            brand: string;           
            mainImage: string,    
        }
    
        const [customers, setCustomers] = useState<customer[]>([]);
    
        useEffect(() => {
            fetchCustomers().then(setCustomers);
        }, []);
    return(
        <div className="transparentBg my-md-5 my-3 py-md-5">
        <div className="container">
            <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center my-5">
                    <h3 className="style-26-lh39 --black border-dashed repeated-x bold bottom yellow mx-auto my-3 pb-1 d-flex align-items-center justify-center toast-container">
                        <img src="assets/svgs/Icon feather-smile.svg" className="me-10" />
                        Trusted by Industry Leaders
                    </h3>
                    </div>
                    <p className="text-center style-17-lh35 --black">
                    We take pride in serving a diverse range of customers who trust our products and services. 
                    From startups to global enterprises, our clients' success is our top priority. 
                    </p>
                <div className="col-md-12 col-sm-12 col-12">
                   
                                      
                    <div className="p-relative mt-md-4 mt-2 d-flex align-items-center packageBtn">                     
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
                              slidesPerView: 6,
                            }
                          }}              
                        >
                            {customers.map((customer, index) => ( 
                                  <SwiperSlide  key={index}>
                                  <div className="_6BoxOwl--box  ml-2 d-flex flex-column justify-center justify-center align-items-center rounded-1">
                                      <img src={customer.mainImage} />
                                      <span className="style-17-lh35 --black mt-md-2  client-cell__body card-title__ellipsis">{customer.brand}</span>
                                  </div>
                                  </SwiperSlide>
                            ))}                                            
                        </Swiper>       
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}