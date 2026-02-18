import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Privatejet = () => {
    const options = {    //object
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 2
            }
        }
    }

    return (
        <>
            <div className="private-main">
                <div className="container">
                    <div className="private-inner">
                        <div className="col-1">
                            <div className="content">
                                <div className="sec-1">
                                    <span>Private Flights</span>
                                    <p>Browse legs <br />
                                        of our charters</p>
                                </div>
                                <div className="sec-2">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non
                                        faucibus congue, lectus quam viverra nulla, quis egestas neque sapien ac magna.</p>
                                </div>
                                <div className="sec-3">
                                    <div className="btns">
                                        <FaArrowLeftLong className="icon" />
                                        <FaArrowRightLong className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="image-content">
                                <OwlCarousel className='owl-theme' {...options}>
                                    <div class='item'>
                                        <div className="part-1">
                                            <div className="sec-1">
                                                <p>departure</p>
                                                <span><IoAirplaneSharp className="icon" /></span>
                                                <p>arrival</p>
                                            </div>
                                            <div className="sec-2">
                                                <img src="assets/images/airplane-img.png" alt="airplane-img" />
                                                <ul>
                                                    <li>
                                                        <span>date:</span>
                                                        tuseday, jul 6.2022
                                                    </li>
                                                    <li>
                                                        <span>departure:</span>
                                                        11:25 pm
                                                    </li>
                                                    <li>
                                                        <span>arrival:</span>
                                                        02:25 am
                                                    </li>
                                                    <li>
                                                        <span>starting from:</span>
                                                        $2786
                                                    </li>
                                                    <li>
                                                        <span>person:</span>
                                                        adult 3
                                                    </li>
                                                </ul>
                                                <div className="sec-3">
                                                    <span>
                                                        <p>book now</p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='item'>
                                        <div className="part-1">
                                            <div className="sec-1">
                                                <p>departure</p>
                                                <span><IoAirplaneSharp className="icon" /></span>
                                                <p>arrival</p>
                                            </div>
                                            <div className="sec-2">
                                                <img src="assets/images/airplane-img.png" alt="airplane-img" />
                                                <ul>
                                                    <li>
                                                        <span>date:</span>
                                                        tuseday, jul 6.2022
                                                    </li>
                                                    <li>
                                                        <span>departure:</span>
                                                        11:25 pm
                                                    </li>
                                                    <li>
                                                        <span>arrival:</span>
                                                        02:25 am
                                                    </li>
                                                    <li>
                                                        <span>starting from:</span>
                                                        $2786
                                                    </li>
                                                    <li>
                                                        <span>person:</span>
                                                        adult 3
                                                    </li>
                                                </ul>
                                                <div className="sec-3">
                                                    <span>
                                                        <p>book now</p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Privatejet;