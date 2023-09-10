import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full text-white p-4 md:block hidden">
        <div className="w-full relative">
            <div className="w-full grid grid-cols-5 gap-0 mx-auto">
                {/* row */}
                <div className="grid-item"></div>
                <div className="grid-item flex items-center">
                    <img style={{width:"130px"}} src="../../images/new-logo-tanawan91.png" alt="" />
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item" style={{gridRow:"span 4"}}>
                    <img className="w-full h-full" src="../../images/img-footer.png" alt="" />
                </div>
                {/* row end */}

                {/* row */}
                <div className="grid-item"></div>
                <div className="grid-item">Get In Touch</div>
                <div className="grid-item">Quick Links</div>
                <div className="grid-item">Subscribe Us</div>
                {/* <div className="grid-item"></div> */}
                {/* row end */}
                
                {/* row */}
                <div className="grid-item"></div>
                <div className="grid-item detail">
                    <p>64/66 Soi Cholprathan 10, Khan Klong Road, Hua Hin, Hua Hin, Prachuap KhiriKhan 77110</p>
                    <p>Telephone : 09 3388 8515</p>
                    <p>Phone : 032 510025</p>
                    <p>Email : panithan_ipk@hotmail.com</p>
                    <p>tanawan91@tanawan91.co.th</p>
                </div>
                <div className="grid-item detail">
                    <p>Home</p>
                    <p>Services</p>
                    <p>Projects</p>
                    <p>Publications</p>
                    <p>Contact</p>
                </div>
                <div className="grid-item detail">
                    <input type="text" className="form-control" name="email" id="email" placeholder="Your Email" />
                </div>
                
                <div className="grid-item border-t"></div>
                <div className="grid-item border-t"></div>
                <div className="grid-item text-center detail border-t pt-4">
                    <p>&copy; {new Date().getFullYear()} TANAWAN91. All rights reserved</p>
                </div>
                <div className="grid-item border-t"></div>

                {/* row end */}
            </div>
        </div>
    </footer>
  );
};

export default Footer;
