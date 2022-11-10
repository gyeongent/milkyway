import React from "react";

function Footer(){

    const date = new Date();

    return(
        <div className="footer">
            &copy; {date.getFullYear()} Milky Way Project All rights reserved.
        </div>
    );
}

export default Footer;