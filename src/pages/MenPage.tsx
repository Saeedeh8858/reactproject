import { Breadcrumb } from "../components/Breadcrumb"
import { MenCat } from "../components/MenCat";
import { TodayPackages } from "../components/TodayPackages";
import { VideoClip } from "../components/VideoClip";


export const MenPage = () =>{
    return(
           <>
           <Breadcrumb pageName="Men's Clothes " />
           <MenCat />
           <div className="my-md-5 my-3 py-md-2 py-1 bg-darkBlue">
           <div className="container">
             <TodayPackages />
           </div>
           </div>
          <VideoClip />
           </>
       );
}