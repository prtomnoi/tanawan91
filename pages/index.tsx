import Image from 'next/image';
import Layout from './components/layout';
import Session1 from './components/homes/session1';
import Session2 from './components/homes/session2';
import Session3 from './components/homes/session3';
import Session4 from './components/homes/session4';
import Contact from './components/homes/contact';
import { useEffect } from 'react';
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const data = {
    design:[ 
      {
        title:"Talking",
        step:[
          "A : ให้คำปรึกษา พูดคุย ถึงโจทย์ของโครงการ ความต้องการ งบประมาณ สำรวจพื้นที่หน้างาน",
          "B : ร่างสัญญา รายละเอียดของงาน"
        ]
      },
      {
        title:"Design Process",
        step:[
          "A : ให้คำปรึกษา พูดคุย ถึงโจทย์ของโครงการ ความต้องการ งบประมาณ สำรวจพื้นที่หน้างาน",
          "B : ร่างสัญญา รายละเอียดของงาน"
        ]
      },
      {
        title:"Construction Drawing and Construction Permission",
        step:[
          "A : ให้คำปรึกษา พูดคุย ถึงโจทย์ของโครงการ ความต้องการ งบประมาณ สำรวจพื้นที่หน้างาน",
          "B : ร่างสัญญา รายละเอียดของงาน"
        ]
      },
      {
        title:"Construction",
        step:[
          "A : ให้คำปรึกษา พูดคุย ถึงโจทย์ของโครงการ ความต้องการ งบประมาณ สำรวจพื้นที่หน้างาน",
          "B : ร่างสัญญา รายละเอียดของงาน"
        ]
      },
      {
        title:"Project Hand over",
        step:[
          "A : ให้คำปรึกษา พูดคุย ถึงโจทย์ของโครงการ ความต้องการ งบประมาณ สำรวจพื้นที่หน้างาน",
          "B : ร่างสัญญา รายละเอียดของงาน"
        ]
      }
    ],
    build:[ 
      {
        title:"Talking",
        step:[
          "A : ให้คำปรึกษา พูดคุย ถึงโจทย์ของโครงการ ความต้องการ งบประมาณ สำรวจพื้นที่หน้างาน",
          "B : ร่างสัญญา รายละเอียดของงาน"
        ]
      },
      {
        title:"Construction",
        step:[
          "A : ให้คำปรึกษา พูดคุย ถึงโจทย์ของโครงการ ความต้องการ งบประมาณ สำรวจพื้นที่หน้างาน",
          "B : ร่างสัญญา รายละเอียดของงาน"
        ]
      },
      {
        title:"Project Hand over",
        step:[
          "A : ให้คำปรึกษา พูดคุย ถึงโจทย์ของโครงการ ความต้องการ งบประมาณ สำรวจพื้นที่หน้างาน",
          "B : ร่างสัญญา รายละเอียดของงาน"
        ]
      }
    ]
  }
  let slideIndex = 0;
  let timeoutID:any;
  
  function showSlides(index?:any) {
      if(index >= 0){
        slideIndex = index;
      }
      let slides:any = document.getElementsByClassName("slide-banner");
      let dots:any = document.getElementsByClassName("dot-slide-banner");
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

  function resetTimeout(index?:any) {
      clearTimeout(timeoutID); // ล้าง timeout ที่กำลังทำงานอยู่
      showSlides(index); // เริ่มการแสดงสไลด์ใหม่ทันที
  }
  useEffect(()=>{
    showSlides();
  },[])

  return (
    <Layout>
      {/* <div className='banner'></div> */}
      <div className="w-full relative">
        <div className="slideshow-container-banner">
            <div className="slide-banner">
                <Fade>
                  <img className='w-full' src="../../images/img-banner.png" alt="Slide 1" />
                </Fade>
            </div>
            <div className="slide-banner">
                <Fade>
                  <img className='w-full' style={{filter:"brightness(0.5)"}} src="../../images/article-mockup-2.png" alt="Slide 2" />
                </Fade>
            </div>
            <div className="slide-banner">
                <Fade>
                  <img className='w-full' src=".../../images/about-mockup-2.png" alt="Slide 3" />
                </Fade>
            </div>
        </div>
        <div className="w-full flex justify-center absolute dot-container-banner">
            <div className="w-1/3 md:w-1/6 flex mx-auto">
              <div className='w-4/12 px-2 text-center'>
                <button type='button' className="dot-slide-banner active" onClick={()=>resetTimeout(0)}></button>
              </div>
              <div className='w-4/12 px-2 text-center'>
                <button type='button' className="dot-slide-banner" onClick={()=>resetTimeout(1)}></button>
              </div>
              <div className='w-4/12 px-2 text-center'>
                <button type='button' className="dot-slide-banner" onClick={()=>resetTimeout(2)}></button>
              </div>
            </div>
        </div>
      </div>
      
      <Session1/>
      <Session2 data={data}/>
      <Session3/>
      <Session4/>
      <Contact/>
    </Layout>
  )
}

export default Home;
