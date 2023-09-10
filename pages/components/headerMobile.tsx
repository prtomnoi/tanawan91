import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const HeaderMobile = () => {
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
    <div className="relative md:hidden">
    <div className="fixed top-0 left-0 w-full header-color text-white p-4 z-10">
      <header>
        <div className="w-full">
          <div className="w-full grid grid-cols-7 gap-4 mx-auto place-items-center">
            <div className="flex justify-center" style={{gridColumn:"span 3"}}>
              <Link href="/"><img className="w-full" src="../../images/new-logo-tanawan91.png" alt="" /></Link>
            </div>
            <div></div>
            <div></div>
            <div><h1 className="text-lang">EN</h1></div>
            <IconContext.Provider value={{ className: "menu-icon" }}>
              <div onClick={()=>setShowMenu(!showMenu)}> {showMenu ? <IoClose/> : <GiHamburgerMenu/>}</div>
            </IconContext.Provider>
          </div>
        </div>
        {
          showMenu &&
          
          <div className="w-full h-screen text-right pr-4 border-t box">
            <div className="w-full pt-4"><p className="text-menu">Services</p></div>
            <div className="w-full pt-4"><p className="text-menu">Projects</p></div>
            <div className="w-full pt-4"><p className="text-menu">Publications</p></div>
            <div className="w-full pt-4"><p className="text-menu">Contact</p></div>
            <div className="w-full pt-4"><p className="text-menu">About</p></div>
          </div>
            
        }
      </header>
    </div>
    
    {/* Other content on your page */}
  </div>
  
  );
};

export default HeaderMobile;