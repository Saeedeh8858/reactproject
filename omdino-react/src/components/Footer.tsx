import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
       
     <footer className="pb-4 p-relative pt-md-5">
        <div className="container">
            
            <div className="d-flex justify-content-between footerColumn text-start">
                <div className="border-dashed repeated-y normal ps-md-3">
                    <Link to="#" className="d-block mb-2">
                        <img src="assets/image/Group 1.png" className="img-fluid" />
                    </Link>
                    <p className="style-17-lh26 --gray mb-2 pe-md-1">
                    From startups to global enterprises, our clients' success is our top priority.
                    Join our growing network and experience excellence with us!
                    </p>
                    <address className="style-17-lh35 --white">
                        <div className="style-17-lh35 --white">
                            <span className="me-2">---</span>
                             Farhad Street ,Farhad 22 , NO 18 , ground floor 
                        
                        </div>
                        <div className="d-md-flex d-block align-items-center ">
                            <div className=""><span className="me-2">---</span>24pasokh@gmail.com</div>
                            <div className="ms-md-3"><span className="me-2">---</span>omdinionline</div>
                        </div>
                    </address>
                </div>
                <div className="border-dashed repeated-y normal pe-md-3 ms-md-3">
                    <div className="d-flex justify-content-md-start justify-content-between">
                        <div className="d-flex flex-column ms-md-4 text-start">
                            <h4 className="style-20-white-bold mb-2">Customer servicess</h4>
                            <Link className="style-17-lh26 --gray mb-1" to="/">FAQ </Link>
                            <Link className="style-17-lh26 --gray mb-1" to="/">register an Order </Link>
                            <Link className="style-17-lh26 --gray mb-1" to="/">Policies</Link>
                            <Link className="style-17-lh26 --gray mb-1" to="/">Privacy </Link>
                            <Link className="style-17-lh26 --gray mb-1" to="/"> Order Tracking </Link>
                        </div>
                        <div className="d-flex flex-column text-start ms-3">
                            <h4 className="style-20-white-bold mb-2"> About Omdino</h4>
                            <Link className="style-17-lh26 --gray mb-1" to="/about-us">About Us</Link>
                            <Link className="style-17-lh26 --gray mb-1" to="contact-us">ContactUs</Link>
                            <Link className="style-17-lh26 --gray mb-1" to="/">Product's Garantee </Link>
                        </div>
                    </div>
                </div>
                <div className="ps-md-3">
                    <div className="d-flex align-items-center socials mb-4 justify-content-between">
                        <Link to="#" className="me-1 d-flex align-items-center justify-content-center">
                            <img src="assets/svgs/Icon awesome-youtube.svg" />
                        </Link>
                        <Link to="#" className="me-1 d-flex align-items-center justify-content-center">
                            <img src="assets/svgs/Icon feather-instagram.svg" />
                        </Link>
                        <Link to="#" className="me-1 d-flex align-items-center justify-content-center">
                            <img src="assets/svgs/Icon awesome-facebook.svg" />
                        </Link>
                        <Link to="#" className="d-flex align-items-center justify-content-center">
                            <img src="assets/svgs/Icon awesome-telegram.svg" />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to="#" className="namad d-flex align-items-center justify-content-center">
                            <img src="assets/image/enamad.png" className="img-fluid" />
                        </Link>
                        <Link to="#" className="namad d-flex align-items-center justify-content-center">
                            <img src="assets/image/samandehi@2x.png" className="img-fluid" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="underFooter">
        <div className="container">
            <div className="d-md-flex d-block justify-content-between align-items-center style-17-lh26 --gray text-center">
                <span className="">
                The use of content from the Omadino online store is allowed only for non-commercial purposes and with proper attribution.
                </span>
                <span dir="ltr">© Copyright 2021 BikoPlus.com</span>
            </div>
        </div>
    </div>
    </>
    );
}