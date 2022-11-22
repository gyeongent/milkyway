import React from "react";
import Compass from "../compass.svg";

function Footer(){

    const date = new Date();

    function BackToTop(){
        window.scrollTo(0,0);
    }

    return(
        <div>
            <div className="mobile_b2t" onClick={BackToTop}>
                <img src={Compass} alt="Back to top" width={'30vw'}/>
                <div>Back to top</div>
            </div>
            <div className="footer">
                &copy; {date.getFullYear()} Milky Way Project All rights reserved.
            </div>
        </div>
        
    );
}

export default Footer;