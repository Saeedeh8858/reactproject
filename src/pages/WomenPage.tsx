import { Breadcrumb } from "../components/Breadcrumb"
import { ToggleText } from "../components/ToggleText";
import { VideoClip } from "../components/VideoClip";
import { WomanCat } from "../components/WomanCat";
import { WomenCat } from "../components/WomenCat";

export const WomenPage = () => {
    return(
        <>
        <Breadcrumb pageName="Women's Clothes " />
        <WomanCat />
        <div className="my-md-5 my-3 py-md-2 py-1 bg-darkBlue">
        <div className="container">
            <WomenCat />
        </div>
        </div>
        <VideoClip />
       
        
        <ToggleText />
        </>
    );
}