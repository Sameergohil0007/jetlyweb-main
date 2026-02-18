import React from "react";
import Banner from "./banner";
import Service from "./service";
import Contact from "./contact";
import Feature from "./feature";
import Booking from "./booking";
import Offer from "./offer";
import Counter from "./counter";
import Customer from "./customer";
import SpecialOffer from "./special-offer";
import Privatejet from "./privatejet";
import Destination from "./destination";
import Brand from "./brand";
import News from "./news";

const HomeComponents = () =>{
    return(
        <>
          <Banner/>
          <Service/>
          <Contact/>
          <Feature/>
          <Booking/>
          <Offer/>
          <Counter/>
          <Customer/>
          <SpecialOffer/>
          <Privatejet/>
          <Destination/>
          <Brand/>
          <News/>
        </>
    );
}

export default HomeComponents;