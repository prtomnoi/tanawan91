import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const FooterMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  function changeBackgroundColor() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollY / maxScroll) * 100;
    var navigation = document.getElementById("menu-header");
    // Adjust the colors and thresholds as needed
    if (percentage > 18) {
      navigation?.classList.add("header-color");
    } else {
      navigation?.classList.remove("header-color");
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
  }, []);
  
  return (
    <footer className="bottom-0 w-full text-white p-4 md:hidden">
        <div className="w-full relative">
            <div className="w-full flex flex-wrap mx-auto">
                <div className="w-full">
                  <img style={{width:"130px"}} src="../../images/new-logo-tanawan91.png" alt="" />
                </div>
                <div className="w-full">
                    <div className="w-full text-xl py-4">Get In Touch</div>
                    <div className="w-full text-gray-400">
                      <p>64/66 Soi Cholprathan 10, Khan Klong Road, Hua Hin, Hua Hin, Prachuap KhiriKhan 77110</p>
                      <p>Telephone : 09 3388 8515</p>
                      <p>Phone : 032 510025</p>
                      <p>Email : panithan_ipk@hotmail.com</p>
                      <p>tanawan91@tanawan91.co.th</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full text-xl py-4">Subscribe Us</div>
                    <div className="w-full">
                      <input type="text" className="form-control" name="email" id="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="w-full text-center border-t pt-4">
                    <p>&copy; {new Date().getFullYear()} TANAWAN91. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default FooterMobile;