import React from "react";
import AbtBanner from "./abt-ban";
import About from "./about-main";
import Count from "./counter";
import CustFeed from "./cust-feedback";
import Video from "./video";
import Brand from "../home-page/brand";
import Team from "./team";

const AboutComponents = () =>{
    return(
        <>
           <AbtBanner/>
           <About/>
           <Count/>
           <CustFeed/>
           <Video/>
           <Brand/>
           <Team/>
        </>
    );
}

export default AboutComponents;