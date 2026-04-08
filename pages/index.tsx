import Image from 'next/image';
import Layout from './components/layout';
import Session1 from './components/homes/session1';
import Session2 from './components/homes/session2';
import Session3 from './components/homes/session3';
import Session4 from './components/homes/session4';
import Contact from './components/homes/contact';
import { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Home = ({res,resT,lang}:any) => {
  const { t, i18n } = useTranslation('common');
  const [titleAbout,setTitleAbout] = useState("");
  const [titleProject,setTitleProject] = useState("");
  const [dataSetting,setDataSetting] = useState();
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    fade:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  let slideIndex = 0;
  let timeoutID:any;
  
  function showSlides(index?:any) {
      if(index >= 0){
        slideIndex = index;
      }
      let slides:any = document.getElementsByClassName("slide-banner");
      let dots:any = document.getElementsByClassName("dot-slide-banner");
      if(slides.length >0){
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
        console.log(slideIndex,index);
        timeoutID = setTimeout(showSlides, 10000); // Change slide every 5 seconds (5000 milliseconds)
      }
  }

  function resetTimeout(index?:any) {
      clearTimeout(timeoutID); // ล้าง timeout ที่กำลังทำงานอยู่
      showSlides(index); // เริ่มการแสดงสไลด์ใหม่ทันที
  }
  useEffect(()=>{
    // showSlides();
    let l = "";
    if(lang == "th"){
      l = "_th";
    }
    if(res?.settingWeb?.filter((e:any) => e.page == 'about').length>0){
      const t = res?.settingWeb?.filter((e:any) => e.page == 'about')[0][`title${l}`];
      setTitleAbout(t);
    }
    if(res?.settingWeb?.filter((e:any) => e.page == 'service').length>0){
      const dSetting = res?.settingWeb?.filter((e:any) => e.page == 'service')[0];
      setDataSetting(dSetting);
    }
    if(res?.settingWeb?.filter((e:any) => e.page == 'project').length>0){
      const t = res?.settingWeb?.filter((e:any) => e.page == 'project')[0][`title${l}`];
      setTitleProject(t);
    }
    //console.log(res?.settingWeb?.filter((e:any) => e.page == 'about'));
  },[])
  console.log(res,titleAbout);
  return (
    <Layout lang={lang}>
      <div className="w-full relative">
      </div>
      <Fade>
        <Slider {...settings} className='slideshow-container-banner'>
          {
            res.slider.map((o:any,i:any)=>(
              <div key={i} className="slide-banner">
                <img className='w-full' style={{filter:"brightness(0.5)"}} src={process.env.NEXT_PUBLIC_IMG_URL+o.image} />
              </div>
            ))
          }
        </Slider>
      </Fade>
      <Session1 data={res.abouts} title={titleAbout}/>
      <Session2 dataRes={res.services} dataSetting={dataSetting}/>
      <Session3 data={res.projects} title={titleProject}/>
      <Session4 data={res.articles}/>
      <Contact data={res.contact}/>
    </Layout>
  )
}


export async function getServerSideProps({query,locale}:any) { 
  let lang = "";
  if(locale == "th"){
    lang = "-"+locale;
  }
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/homes`+lang);
  const data = await res?.json(); 
  return {
    props: {
      res:data||null,
      lang:locale
    },
  } 
}

export default Home;
