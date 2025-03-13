import { Link } from "react-router-dom";
import { useState , useEffect } from 'react';
import { MembersLogin } from './MembersLogin';
export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

   

    return (        
        <>
            <header className="py-md-5 py-1">
                <div className="container">
                    
                    <div className="d-md-flex align-items-md-center justify-content-md-between p-relative">
                        <div className="d-md-flex align-items-md-center flex-md-grow-1">                          
                            {/* <img src="./svgs/menu.svg" data-bs-toggle="offcanvas" className="iconSvg menuIconXs me-2 gray" data-bs-target="#menu-top" aria-controls="menu-top"/> */}
                            <a href="#" className="d-inline-block logo">
                                <img src="assets/image/Group 1.png" className="img-fluid" />
                            </a>
                            <div className="ps-md-3 mt-md-0 mt-1 pe-md-5 flex-1">
                                
                            <div className="input-group searchBox border border-primary">
                                <div className="dropdown-toggle searchDrp p-relative d-flex btn border-end me-1 align-items-center">
                                <button className="border-0 bg-white p-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Men Clothes
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><Link className="dropdown-item" to="men-page">Men's  Clothes</Link></li>
                                <li><Link className="dropdown-item" to="women-page">Women's Clothes</Link></li>
                                <li><Link className="dropdown-item" to="">Accesory </Link></li>
                                </ul>
                                </div>
                                <input type="search" className="form-control border-0 searchInput form-control-sm" placeholder="Enter a word..." />
                                <button className="btn bg-primary text-white border-0 btn-md-lg rounded-end-1" type="button" id="button-addon1">
                                    <svg className="iconSvg svgSearch me-1" width="20.414" height="20.414" viewBox="0 0 20.414 20.414">
                                        <use href="assets/svgs/svgs.svg#search"></use>
                                    </svg>                        
                                    Search
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center headerBtnParent col-sm-2 flex-fill">
                            <button className="btn border border-secondary rounded-1 me-2 headerBtn d-flex align-items-center justify-content-center" 
                             onClick={() => setIsModalOpen(true)}>
                            <svg className="iconSvg me-1" stroke="currentColor" width="22" height="24.5" viewBox="0 0 22 24.5">
                                <use href="assets/svgs/svgs.svg#user"></use>
                            </svg>
                                   User Profile
                            </button>
                           
                            <Link to="#" className="border border-secondary position-relative rounded-1 d-flex align-items-center justify-content-center headerBtn">
                                <span className="btn rounded-circle position-absolute">5</span>
                                <svg width="26" height="24.909" className="iconSvg me-1" stroke="currentColor" viewBox="0 0 26 24.909">
                                    <use href="assets/svgs/svgs.svg#shopping-cart"></use>
                                </svg>                   
                               Basket
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            {/* <MembersLogin  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      </>     
    );
}
