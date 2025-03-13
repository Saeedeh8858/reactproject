import { MainCat } from '../components/MainCat';
import { TodayPackages } from '../components/TodayPackages';
import { WomenCat } from '../components/WomenCat';
import { OurCustomers } from '../components/OurCustomers';
import { HomeSlider } from '../components/HomeSlider';
import { TopFooter } from '../components/TopFooter';
import { WhyUs } from '../components/WhyUs';
export const HomePage = () => {
    return (
        <>
            <HomeSlider />
            <MainCat />
            <div className="d-flex justify-content-center mb-5 pb-5">
                <h1 className="style-26-lh39 black border-dashed repeated-x bold bottom yellow pb-1 mx-auto my-3 d-flex align-items-center justify-content-center toast-container">
                    <img src="assets/svgs/Icon feather-smile.svg" className="iconSvg text-warning me-1" />
                    Today's Packages
                </h1>
            </div>
            <TodayPackages />
            <WomenCat />
            <OurCustomers />
            <WhyUs />
            <TopFooter />
        </>

    );
}