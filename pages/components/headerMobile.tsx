import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useTranslation } from 'next-i18next';


const HeaderMobile = ({lang}:any) => {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();
  //const [lang,setLang] = useState(i18n.language);
  const LanguageCodes = {
    "en": { key: "en", code: "en", label: "EN" },
    "th": { key: "th", code: "th", label: "TH" },
  };
  const path = (lang: string): string => {
    switch (lang) {
      case "th":
        return "/th/";
      default:
        return "/";
    }
  };
  const handleSwitchLang = (e:any): void => {
    const pathName = window.location.pathname;
    const {value} = e.target;
    console.log(e, value);
    const p: string = path(value);
    let a: string = "";
    // console.log((pathName + "/").match(/^(\/th\/|\/cn|\/tw\/|\/es\/|\/de\/|\/ru\/|\/ar\/|\/fr\/|\/jp\/)?/g).length > 0)
    // (pathName + "/").match(/^\/(th|cn|tw|es|de|ru|ar|fr|jp)\//g)
    if ((pathName + "/").match(/^\/(th)\//g)) {
      a = pathName.split("/").filter(function (o, i) { return i >= 2 })?.join("/");
    } else {
      a = pathName.split("/").filter(function (o, i) { return i >= 1 })?.join("/");
    }
    a = a == undefined ? "" : a;
    window.location.href = p + a;
  };

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
            <div>
              <select name="" id="" value={lang} className="input-select-lang" onChange={(e) => handleSwitchLang(e)}>
                {Object.entries(LanguageCodes).map(([key, value], i) => (
                      <option key={i} value={value.key}>{value.label}</option>
                ))}
              </select>
            </div>
            <IconContext.Provider value={{ className: "menu-icon" }}>
              <div onClick={()=>setShowMenu(!showMenu)}> {showMenu ? <IoClose/> : <GiHamburgerMenu/>}</div>
            </IconContext.Provider>
          </div>
        </div>
        {
          showMenu &&
          
          <div className="w-full h-screen text-right pr-4 border-t box">
            <div className="w-full pt-4"><Link href="/services"><p className="text-menu">{lang == 'th'?"บริการของเรา":"Services"}</p></Link></div>
            <div className="w-full pt-4"><Link href="/projects"><p className="text-menu">{lang == 'th'?"โครงการ":"Projects"}</p></Link></div>
            <div className="w-full pt-4"><Link href="/articles"><p className="text-menu">{lang == 'th'?"ข่าวสาร":"Publications"}</p></Link></div>
            <div className="w-full pt-4"><Link href="/contact"><p className="text-menu">{lang == 'th'?"ติดต่อเรา":"Contact"}</p></Link></div>
            <div className="w-full pt-4"><Link href="/about"><p className="text-menu">{lang == 'th'?"เกี่ยวกับเรา":"About"}</p></Link></div>
          </div>
            
        }
      </header>
    </div>
    
    {/* Other content on your page */}
  </div>
  
  );
};

export default HeaderMobile;