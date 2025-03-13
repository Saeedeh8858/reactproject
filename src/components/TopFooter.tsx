import { Link } from "react-router-dom";
export const TopFooter = () => {
    return (
<div className="container">
        <div className="newsletter d-md-flex flex-wrap align-items-center justify-content-center">
                <div className="style-17-lh35 --white me-md-5 text-start">
                    Be the First<br />
                    to Know About the Latest Discounts.!
                </div>
                <div className="input-group searchBox bg-white flex-1">
                    <button className="btn border-end me-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Men's Clothes
                    </button>
                    <ul className="dropdown-menu dropdown-menu-start">
                        <li><Link className="dropdown-item" to="#">Men Clothes</Link></li>
                        <li><Link className="dropdown-item" to="#">Women Clothes </Link></li>
                        <li><Link className="dropdown-item" to="#">Accesories </Link></li>
                    </ul>
                    <input type="text" className="form-control border-0 searchInput form-control-sm" placeholder="Enter Your Mobile Number…"/>
                    <button className="btn bg-white text-yellow flex-half --border-L" type="button" id="button-addon1">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );

     
}