import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

const Header = ({lang}:any) => {
  const { t } = useTranslation();
  // const [lang,setLang] = useState(i18n.language);
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
    
    if (parseInt(percentage.toString()) > 5) {
      navigation?.classList.add("header-color");
    } else {
      navigation?.classList.remove("header-color");
    }
  }
  React.useEffect(() => {

    window.addEventListener('scroll', changeBackgroundColor);
  }, []);
  return (
    <div className="relative hidden md:block">
    <div className="fixed top-0 left-0 w-full text-white p-4 z-10" id="menu-header">
      <header>
        <div className="w-full">
          <div className="w-full lg:w-4/5 flex flex-wrap mx-auto place-items-center text-center">
            <div className='px-4' style={{width:"14.28%"}}><Link href="/services">{lang == 'th'?"บริการของเรา":"Services"}</Link></div>
            <div className='px-4' style={{width:"14.28%"}}><Link href="/projects">{lang == 'th'?"โครงการ":"Projects"}</Link></div>
            <div className='px-4' style={{width:"14.28%"}}><Link href="/articles">{lang == 'th'?"ข่าวสาร":"Publications"}</Link></div>
            <div className="px-4 flex justify-center items-center" style={{width:"14.28%"}}>
              <Link href="/"><img className="w-full" style={{filter:"drop-shadow(2px 4px 6px black)",maxWidth:"none"}} src="../../images/new-logo-tanawan91.png" alt="" /></Link>
            </div>
            <div className='px-4' style={{width:"14.28%"}}><Link href="/contact">{lang == 'th'?"ติดต่อเรา":"Contact"}</Link></div>
            <div className='px-4' style={{width:"14.28%"}}><Link href="/about">{lang == 'th'?"เกี่ยวกับเรา":"About"}</Link></div>
            <div className='px-4' style={{width:"14.28%"}}>
              <select name="" id="" value={lang} className="input-select-lang" onChange={(e) => handleSwitchLang(e)}>
                {Object.entries(LanguageCodes).map(([key, value], i) => (
                      <option key={i} value={value.key}>{value.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>
    </div>
    
    {/* Other content on your page */}
  </div>
  
  );
};
export default Header;

