import { WhyUs } from "../components/WhyUs";

export const AboutUs = () => {
    return(
        <div className="container">
            <div className="col-12">
                <img alt="warehouse" src="assets/image/warehose.jpg" className="img-fluid" />
                <h1 className="py-md-6 p-2">OMDINO E-Commerce Group</h1>
                <p className="p-5 text-lg">
                OMDINO E-Commerce Group has now become a complete ecosystem for all online businesses. 
                The approach of the Digikala Group has been to complete the value creation chain for Iran's digital economy, 
                and in this process, the necessary infrastructure has been provided to meet the needs of businesses.
                </p>
                <br/><br/><br/>
                <WhyUs />
            </div>
        </div>
    );
}