import React from "react";

const today=new Date();
const date=today.getDate();


function Footer(){
    return(
        <div>
            <footer>
                Today's Date is :- {date}/{new Date().getMonth()}/{new Date().getFullYear()} 
            </footer>
        </div>
    )
};

export default Footer;